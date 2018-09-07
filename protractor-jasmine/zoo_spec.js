describe ("Adopt an animal on the zoo test site", function() {

	it ("should be able to get to correct page", function() {
		browser.get("http://www.thetestroom.com/jswebapp/");
		expect(browser.getCurrentUrl()).toContain("jswebapp");
		expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
	});

	it ("should able to adopt an animal", function() {
		browser.get("http://www.thetestroom.com/jswebapp/");
		var textMessage = "Test text for filling in this field";

		element(by.model("person.name")).sendKeys(textMessage);
		element(by.binding("person.name")).getText().then(function(text){
			expect(text).toEqual("Test text for filling in this field");

		});
	});
});


describe ("text zoo site for input field on home page", function() {

	it ("to test input field and check text output", function() {
		browser.get("http://www.thetestroom.com/jswebapp/");
		expect(browser.getCurrentUrl()).toContain("jswebapp");
		expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");

		element(by.model("person.name")).sendKeys("Test text for filling in this field");
		element(by.binding("person.name")).getText().then(function(text){
			console.log(text);
		});
		element (by.buttonText("CONTINUE")).click();
		element (by.model("animal")).$('[value="1"]').click();
		element (by.partialButtonText("CONT")).click();
	});	
});