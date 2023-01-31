package com.github.wasiqb.boyka.manager;

import static com.github.wasiqb.boyka.enums.CloudProviders.NONE;
import static com.github.wasiqb.boyka.enums.Message.CAPABILITIES_REQUIRED_FOR_REMOTE;
import static com.github.wasiqb.boyka.enums.Message.EMPTY_BROWSER_NOT_ALLOWED;
import static com.github.wasiqb.boyka.enums.Message.HOSTNAME_REQUIRED_FOR_REMOTE;
import static com.github.wasiqb.boyka.enums.Message.INVALID_BROWSER;
import static com.github.wasiqb.boyka.enums.Message.INVALID_REMOTE_URL;
import static com.github.wasiqb.boyka.enums.Message.NULL_REMOTE_URL;
import static com.github.wasiqb.boyka.enums.Message.PASSWORD_REQUIRED_FOR_CLOUD;
import static com.github.wasiqb.boyka.enums.Message.PROTOCOL_REQUIRED_FOR_HOST;
import static com.github.wasiqb.boyka.enums.Message.USER_NAME_REQUIRED_FOR_CLOUD;
import static com.github.wasiqb.boyka.sessions.ParallelSession.getSession;
import static com.github.wasiqb.boyka.sessions.ParallelSession.setDriver;
import static com.github.wasiqb.boyka.utils.ErrorHandler.handleAndThrow;
import static com.github.wasiqb.boyka.utils.ErrorHandler.throwError;
import static com.github.wasiqb.boyka.utils.Validator.requireNonNull;
import static io.github.bonigarcia.wdm.WebDriverManager.chromedriver;
import static io.github.bonigarcia.wdm.WebDriverManager.edgedriver;
import static io.github.bonigarcia.wdm.WebDriverManager.firefoxdriver;
import static io.github.bonigarcia.wdm.WebDriverManager.safaridriver;
import static java.text.MessageFormat.format;
import static java.util.Objects.requireNonNullElse;
import static org.apache.logging.log4j.LogManager.getLogger;

import java.net.MalformedURLException;
import java.net.URL;

import com.github.wasiqb.boyka.config.ui.web.WebSetting;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;

class WebDriverManager implements IDriverManager {
    private static final Logger LOGGER = getLogger ();

    @Override
    public void setupDriver () {
        LOGGER.traceEntry ();
        final var webSetting = getSession ().getWebSetting ();
        switch (requireNonNull (webSetting.getBrowser (), EMPTY_BROWSER_NOT_ALLOWED)) {
            case CHROME:
                setDriver (setupChromeDriver (webSetting));
                break;
            case NONE:
                throwError (INVALID_BROWSER);
                break;
            case REMOTE:
                setDriver (setupRemoteDriver (webSetting));
                break;
            case SAFARI:
                setDriver (setupSafariDriver ());
                break;
            case EDGE:
                setDriver (setupEdgeDriver (webSetting));
                break;
            case FIREFOX:
            default:
                setDriver (setupFirefoxDriver (webSetting));
                break;
        }
        setDriverSize (webSetting);
        LOGGER.traceExit ();
    }

    private Capabilities getCapabilities (final WebSetting webSetting) {
        LOGGER.traceEntry ();
        final var capabilities = requireNonNull (webSetting.getCapabilities (), CAPABILITIES_REQUIRED_FOR_REMOTE);
        final var remoteCapabilities = new DesiredCapabilities ();
        capabilities.forEach (remoteCapabilities::setCapability);
        return LOGGER.traceExit (remoteCapabilities);
    }

    private String getHostName (final WebSetting webSetting) {
        LOGGER.traceEntry ();
        if (requireNonNullElse (webSetting.getCloud (), NONE) != NONE) {
            final var hostNamePattern = "{0}:{1}@{2}";
            return format (hostNamePattern, requireNonNull (webSetting.getUserName (), USER_NAME_REQUIRED_FOR_CLOUD),
                requireNonNull (webSetting.getPassword (), PASSWORD_REQUIRED_FOR_CLOUD),
                requireNonNull (webSetting.getHost (), HOSTNAME_REQUIRED_FOR_REMOTE));
        }
        return LOGGER.traceExit (requireNonNull (webSetting.getHost (), HOSTNAME_REQUIRED_FOR_REMOTE));
    }

    private URL getRemoteUrl (final WebSetting webSetting) {
        LOGGER.traceEntry ();
        final var URL_PATTERN = "{0}://{1}/wd/hub";
        final var hostName = new StringBuilder (getHostName (webSetting));
        if (webSetting.getPort () != 0) {
            hostName.append (":")
                .append (webSetting.getPort ());
        }
        final var url = format (URL_PATTERN,
            requireNonNull (webSetting.getProtocol (), PROTOCOL_REQUIRED_FOR_HOST, hostName).name ()
                .toLowerCase (), hostName);
        try {
            return LOGGER.traceExit (new URL (url));
        } catch (final MalformedURLException e) {
            handleAndThrow (INVALID_REMOTE_URL, e);
        }
        return null;
    }

    private void setDriverSize (final WebSetting webSetting) {
        final var window = getSession ().getDriver ()
            .manage ()
            .window ();
        switch (webSetting.getResize ()) {
            case CUSTOM:
                window.setSize (webSetting.getCustomSize ());
                break;
            case FULL_SCREEN:
                window.fullscreen ();
                break;
            case MAXIMIZED:
                window.maximize ();
                break;
            case MINIMIZED:
                window.minimize ();
                break;
            case NORMAL:
            default:
                break;
        }
    }

    private WebDriver setupChromeDriver (final WebSetting webSetting) {
        LOGGER.traceEntry ();
        chromedriver ().setup ();
        final var options = new ChromeOptions ();
        options.addArguments ("enable-automation");
        options.addArguments ("--no-sandbox");
        options.addArguments ("--disable-gpu");
        options.addArguments ("--disable-dev-shm-usage");
        options.setHeadless (webSetting.isHeadless ());
        return LOGGER.traceExit (new ChromeDriver (options));
    }

    private WebDriver setupEdgeDriver (final WebSetting webSetting) {
        LOGGER.traceEntry ();
        edgedriver ().setup ();
        final var options = new EdgeOptions ();
        options.setHeadless (webSetting.isHeadless ());
        return LOGGER.traceExit (new EdgeDriver (options));
    }

    private WebDriver setupFirefoxDriver (final WebSetting webSetting) {
        LOGGER.traceEntry ();
        firefoxdriver ().setup ();
        final var options = new FirefoxOptions ();
        options.setHeadless (webSetting.isHeadless ());
        return LOGGER.traceExit (new FirefoxDriver (options));
    }

    private WebDriver setupRemoteDriver (final WebSetting webSetting) {
        LOGGER.traceEntry ();
        return LOGGER.traceExit (new RemoteWebDriver (requireNonNull (getRemoteUrl (webSetting), NULL_REMOTE_URL),
            getCapabilities (webSetting)));
    }

    private WebDriver setupSafariDriver () {
        LOGGER.traceEntry ();
        safaridriver ().setup ();
        return LOGGER.traceExit (new SafariDriver ());
    }
}