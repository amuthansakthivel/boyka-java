---
title: ✅ Write Test for Web
sidebar_position: 4
---

Once the page object class is created with locators for all the platforms and the [application action class](/docs/guides/ui/page-action) is also created, we can now use it to interact with the page in our tests by calling the corresponding methods from the action class.

:::tip
Check out all the available static methods to interact with the page in your tests. Following are the available action classes:

- [`DriverActions`](/api/actions/driver-actions): Contains all driver related actions
- [`DropDownActions`](/api/actions/drop-down-actions): Contains all drop down related actions
- [`ElementActions`](/api/actions/element-actions): Contains all element related actions
- [`KeyboardActions`](/api/actions/keyboard-actions): Contains all keyboard related actions
- [`MouseActions`](/api/actions/mouse-actions): Contains all mouse related actions
- [`NavigateActions`](/api/actions/navigate-actions): Contains all web navigation related actions
- [`SwipeActions`](/api/actions/swipe-actions): Contains all mobile swipe related actions
- [`VerifyDriverActions`](/api/actions/verify-driver-actions): Contains all verification methods for driver related actions
- [`VerifyDropDownActions`](/api/actions/verify-drop-down-actions): Contains all verification methods for drop down related actions
- [`VerifyElementActions`](/api/actions/verify-element-actions): Contains all verification methods for element related actions
:::

## Example

```java
package com.github.wasiqb.boyka.testng.ui.saucedemo;

import static com.github.wasiqb.boyka.actions.DriverActions.saveLogs;
import static com.github.wasiqb.boyka.actions.DriverActions.takeScreenshot;
import static com.github.wasiqb.boyka.manager.DriverManager.closeDriver;
import static com.github.wasiqb.boyka.manager.DriverManager.createDriver;
import static com.github.wasiqb.boyka.sessions.ParallelSession.getSession;
import static com.google.common.truth.Truth.assertThat;

import com.github.wasiqb.boyka.enums.PlatformType;
import com.github.wasiqb.boyka.testng.ui.saucedemo.actions.SauceDemoActions;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class SauceDemoTest {
  private SauceDemoActions sauceDemo;

  @AfterMethod (alwaysRun = true)
  public void afterMethod () {
    takeScreenshot ();
  }

  @BeforeClass (description = "Setup test class", alwaysRun = true)
  @Parameters ({ "platformType", "driverKey" })
  public void setupTestClass (final PlatformType platformType, final String driverKey) {
    createDriver (platformType, driverKey);
    this.sauceDemo = new SauceDemoActions ();
  }

  @AfterClass (description = "Tear down test class", alwaysRun = true)
  public void tearDownTestClass () {
    saveLogs ();
    closeDriver ();
  }

  @Test (description = "Test login functionality")
  public void testLogin () {
    this.sauceDemo.verifyLogin ("standard_user", "secret_sauce");
  }
}
```