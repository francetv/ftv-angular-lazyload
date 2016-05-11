# Ftv::Components::Lazyload

This project is part of [francetv zoom open source projects](https://github.com/francetv/zoom-public) (iOS, Android and Angular).

A component that integrates [lazyload](https://vvo.github.io/lazyload) in angular easily. Display image only when they are visible in viewport.

## Get sources

```
git clone git@github.com/francetv/ftv-angular-lazyload.git
```

##  How to use

Include javascript

```
<script src="dist/js/ftv.components.lazyload.js"></script>
```

Add attributes

```
<img alt="première image" lzld-src="http://lorempixel.com/640/480/abstract/4" lzld-svg-placeholder="vignettePlaceHolder.svg.html">
```

### Directive

* lzld-src: original image to display
* lzld-svg-placeholder: lightweight placeholder to display until original image is displayed

## Required dependencies

- [npm](https://nodejs.org/)
- [gem](https://rubygems.org/)

## Build process

```
sudo apt-get install ruby ruby-dev gem
npm install -g gulp

npm install
sudo gem install compass

gulp build
```

## Development build for front web only

```
gulp build-dev
```

## Demo

```
npm install -g http-server
http-server
gulp build
```

[http://127.0.0.1:8080/demo.html](http://127.0.0.1:8080/demo.html)

## Run test

```
gulp test
```
