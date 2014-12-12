# Tinytest with app example

Previously, I had created a [tinytest-in-app package](https://github.com/numtel/tinytest-in-app) that would allow Tinytest to be executed from inside your Meteor application with a little PhantomJS magic.

In this example, I show how to use Tinytest to test an app without any extra packages.

Begin by creating a `package.js` file in your app directory. Describe your application as if it were a package but include this line at the very beginning to skip parsing when not testing:

```javascript
if(typeof Meteor !== 'undefined') return;
```

You may run both the test suite and the application simulaneously from the same directory.

```bash
# Start application
$ meteor
# Start test suite
$ meteor test-packages ./ --port 3500
```

The only downside I can see at this point would be that the application's templates are still rendered inside the test suite results.

## License

MIT
