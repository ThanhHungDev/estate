const fs           = require('fs'),
      webdriver    = require('selenium-webdriver'),
      createError  = require('http-errors');



const Product       = require("../../models/product.model")
const responseLibrary = require("../../helpers/response.library")


const until = webdriver.until;
const By = webdriver.By;



module.exports.getProduct = async (req, res) => {

    const { id } = req.params
    const driver = new webdriver.Builder()
                    .forBrowser('chrome')
                    .build();
    if( !driver ) throw createError(responseLibrary.HTTP_NOT_FOUND, "khong tìm thấy chrome driver")
    await driver.get('https://www.click49.net/forum/'); // http://land.vn
		
    var btnLogin = await driver.findElement(By.xpath("//*[contains(@class, 'p-navgroup-link--logIn')]"));
    await btnLogin.click(); ///sendKeys("hùng đẹp trai" );

    let closeButton1 = await driver.wait(until.elementLocated(By.xpath("//*[contains(@class, 'js-overlayClose')]")))
    closeButton1 = await driver.wait(until.elementIsVisible(closeButton1))
    // await closeButton1.click()
    
    var inputUser = await driver.findElement(By.xpath("//*[@name='login']"));
    await inputUser.sendKeys("thuhuong121294@gmail.com");

    var inputPassword = await driver.findElement(By.xpath("//*[@name='password']"));
    await inputPassword.sendKeys("phamdohuy150899");

    var btnSubmitLogin = await driver.findElement(By.xpath("//*[contains(@class, 'button--icon--login')]"));
    
    const response = {
        code   : responseLibrary.HTTP_OK,
        data: id,
        message: "test api crawler",
    }
    return res.status(response.code).json(response)    
}

