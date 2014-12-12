# Tinytest with app example [![Build Status](https://travis-ci.org/numtel/meteor-leaderboard-tinytest.svg?branch=master)](https://travis-ci.org/numtel/meteor-leaderboard-tinytest)

Previously, I had created a [tinytest-in-app package](https://github.com/numtel/tinytest-in-app) that would allow Tinytest to be executed from inside your Meteor application with a little PhantomJS magic.

In this example, I show how to use Tinytest to test an app without any extra packages.

Begin by creating a `package.js` file in your app directory. Describe your application as if it were a package but include this line at the very beginning to skip parsing when not testing:

```javascript
if(typeof Meteor !== 'undefined') return;
```

Place test files in the `tests` directory to exclude them from the Meteor app.

You may run both the test suite and the application simulaneously from the same directory.

```bash
$ git clone https://github.com/numtel/meteor-leaderboard-tinytest.git
$ cd meteor-leaderboard-tinytest
# Start application
$ meteor
# Start test suite
$ meteor test-packages ./ --port 3500
```

*Note:* The application's templates will still be rendered inside the test suite results.

## Resources

* [travis-ci-meteor-packages](https://github.com/arunoda/travis-ci-meteor-packages) - Travis CI integration
* [numtel:benchmark-packages](https://github.com/numtel/meteor-benchmark-packages) - Simple benchmarking
* [numtel:tinytest-fixture-account](https://github.com/numtel/tinytest-fixture-account) - Write tests that require being logged in

## Tinytest documentation

Since there is no official documentation for Tinytest, it may be helpful to have
some here.

Test titles can be any string. Using a separator of `" - "` will allow running
a subset of tests using the `pathPrefix` option.

**Test Syntax:**
```javascript
// Synchronous test
Tinytest.add('test title', function(test){
  test.equal(true, true);
});

// Asynchronous test
Tinytest.addAsync('async test title', function(test, onComplete){
  Meteor.setTimeout(function(){
    test.equal(true, true);
    onComplete();
  }, 1000);
});
```

**Assertions:**
```javascript
test.isFalse(v, msg) // if (!v)
test.isTrue(v, msg) // if(v)
test.equal(actual, expected, message)
test.notEqual(actual, expected, message)
test.length(obj, len, msg)
test.include(s, v) // s = string or object
test.isNaN(v, msg)
test.isUndefined(v, msg)
test.isNotNull(v, msg)
test.isNull(v, msg)

// expected can be:
//  undefined: accept any exception.
//  string: pass if the string is a substring of the exception message.
//  regexp: pass if the exception message passes the regexp.
//  function: call the function as a predicate with the exception.
test.throws(func, expected)

test.instanceOf(obj, klass)

test.runId() // Unique id for this test run

// Call this to fail the test with an exception. Use this to record
// exceptions that occur inside asynchronous callbacks in tests.
//
// It should only be used with asynchronous tests, and if you call
// this function, you should make sure that (1) the test doesn't
// call its callback (onComplete function); (2) the test function
// doesn't directly raise an exception.
test.exception(exception)

test.expect_fail()
```

## License

MIT
