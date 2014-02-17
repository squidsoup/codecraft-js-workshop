# Notes for Node/Angular Workshop for Dunedin Codecraft 18/02/14

## Angular Todo Client + Sails REST API Service

In this workshop we'll be continuing from where we left off last
month, and adding a REST API allowing us to save and retrieve our
todos.

We'll learn a bit about angular factories, $http and time allowing
will create a directive to provide some simple animations in our UI.

## Getting Lost

This repository has been tagged at significant commit points. If you
fall behind, you might find it useful to checkout a tag.

To list tags run:

```git tag -l```

and to checkout a tag run:

```git checkout tags/<tag-name>```

## Testing our Sails service
We can test confirm that our API is serving our todo model using:

```curl http://localhost:1337/todo```
