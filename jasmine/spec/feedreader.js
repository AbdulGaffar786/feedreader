/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('URL is defined and it is not empty', function() {
      allFeeds.map((feed) => {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe(0);
      });
    });

    it('name is defined and it is not empty', function() {
      allFeeds.map((feed) => {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe(0);
      });
    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
  });


  /* TODO: Write a new test suite named "The menu" */
  describe('the menu', function() {

    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('menu', function() {
      expect(document.body).toHaveClass("menu-hidden");
    });

    var menu = document.querySelector(".menu-icon-link");

    it('menu changes when we click upon it', function() {
      menu.click();
      expect(document.body.className).not.toContain('menu-hidden');
      menu.click();
      expect(document.body.className).toContain('menu-hidden');
    })



    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
  });
  /* TODO: Write a new test suite named "Initial Entries" */
  describe('initial entries', function() {


    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    beforeEach(function(done) {
      loadFeed(0, done);
    })
    it('initial entry should be greater than zero', function() {
      var d = document.querySelector(".feed").getElementsByClassName('entry').length;
      expect(d).toBeGreaterThan(0);
    });
  });
  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('new feed Selection', function() {


    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    var first;
    var second;
    beforeEach(function(done) {
      loadFeed(0, function() {
        first = $('.entry').html();

        loadFeed(1, function() {
          second = $('.entry').html();
          done();
        });
      });

    });
    it('initial entry differ', function() {
      expect(first).not.toBe(second);
    });
  });
}());
