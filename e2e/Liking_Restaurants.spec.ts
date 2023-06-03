Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/like');
  });

  Scenario('liking one restaurant', ({ I }) => {
    I.see('Your Liked Restaurant', '.latest__label');
   
    I.amOnPage('/');
    
    I.waitForElement('.coffe-item .coffe-item__content h3 a');  
    I.seeElement('.coffe-item .coffe-item__content h3 a');
    I.click(locate('.coffe-item .coffe-item__content h3 a').first());

    I.waitForElement('#likeButton');  
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.latest__label');
  });

  Scenario('unliking one restaurant', async ({ I }) => {
    I.see('Your Liked Restaurant', '.latest__label');
  
    I.amOnPage('/');
  
    I.waitForElement('.coffe-item .coffe-item__content h3 a');
    const restaurantName = await I.grabTextFrom(locate('.coffe-item .coffe-item__content h3 a').first());
  
    I.click(locate('.coffe-item .coffe-item__content h3 a').first());
  
    I.waitForElement('#likeButton');
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/like');
    I.see(restaurantName, '.coffe-item .coffe-item__content h3 a');
  
    I.click(locate('.coffe-item .coffe-item__content h3 a').first());
  
    I.waitForElement('#likeButton');
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/like');
    I.dontSee(restaurantName, '.coffes');
  });