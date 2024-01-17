# Svelte Workshop Outline and Resources

## Outline

### What is Svelte?
* [Svelte](https://svelte.dev/) is a lightweight component-based web framework developed by Rich Harris
in 2016. 
* [Rich Harris](https://twitter.com/Rich_Harris) is a former front end developer creating interactive articles with
  The Guardian and the New York Times graphics team. He now works at Vercel as
  of 2021.

### Why do people like it?
* Svelte is fairly popular:
  * Svelte was the [most loved web
    framework](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks)
    in the 2021 StackOverflow developer survey. It was the [2nd most loved
    framework](https://survey.stackoverflow.co/2022/#most-loved-dreaded-and-wanted-webframe-love-dread)
    in 2022.
  * Svelte was at the top of the list of frameworks people want to learn in
    2022, according to the [State of Frontend survey](https://tsh.io/state-of-frontend#which-of-the-following-frameworks-would-you-like-to-learn-in-the-future).

---
**Differences between Svelte and React**
(React is still the most used framework)

Svelte 
* Compiled framework
* Small bundle size, optimized to be lightweight and fast (great for mobile)
* Very easy to learn and get started
* High popularity, growing community and support
* Maintained by core developers and the community (no big tech)
 
React
* Virtual DOM
* Large bundle size, but intended to provide lots of features and capabilities
* Somewhat easy to learn (hooks are weird)
* Extremely popular, huge community and support
* Maintained by Meta

---

*Why do people like it?* cont.
* One of the main selling points of Svelte is that it is a compiled framework,
  it does not use the concept of a Virtual DOM. Read more about this
  [here](https://blog.bitsrc.io/react-vs-sveltejs-the-war-between-virtual-and-real-dom-59cbebbab9e9).
  * Web browsers only understand pure vanilla JavaScript, so web frameworks need to find some clever way to convert their code into Javascript.
  * React's Virtual DOM approach:
    * With React, the entire React runtime library is shipped to the browser. Using this runtime, React creates a virtual DOM based on your code, and then translates that virtual DOM to the actual, "real" DOM in pure HTML/CSS/JavaScript that browsers understand.
    * React then looks for changes between the actual DOM and the virtual DOM as you interact with the website, and updates the real DOM to reflect those changes.
  * Svelte's compiler approach (check out Rich Harris' [original blog post](https://svelte.dev/blog/frameworks-without-the-framework) on this):
    * Instead of shipping a runtime to the browser, Svelte compiles all of your code at build time, turning everything into pure HTML/CSS/JavaScript. 
    * This means that the overall bundle that is sent to your browser is much smaller and lightweight, and your app can run much faster.
* Another main selling point of Svelte is that it is easier to learn.
  * While React uses a unique approach of functional/class based components returning JSX, Svelte components look more like a plain HTML file, with a `<script>` and `<style>` tag.
  * This syntax is much more approachable to new web developers since it looks more familiar and involves minimal JavaScript (recall that React components are made in JavaScript files).  
* While React components are written in `.js/.ts/.jsx/.tsx` files, Svelte components are written in `.svelte` files.

### SvelteKit
* [SvelteKit](https://kit.svelte.dev/) is a “metaframework” built for Svelte, allowing you to create full-stack projects easily
  * [Metaframeworks](https://www.ombulabs.com/blog/javascript/what-is-a-javascript-meta-framework.html) are frameworks for frameworks; SvelteKit uses Svelte as its front end, but adds additional functionality to it for full-stack capabilities (frontend and backend)
* SvelteKit[ adds many features](https://kit.svelte.dev/docs/introduction#what-does-sveltekit-provide-on-top-of-svelte) required in a modern web application:
  * Routing
  * Error handling
  * Data fetching
  * Production build optimization
  * Server-side rendering
  * Environment variables
  * ...and more!
  
### Walkthrough

The walkthrough goes through the process of creating a simple Svelte application. The application displays a list of "comments" in a separate route called `/comments`. Users can create new comments, which are added to the global list. They can also delete comments.

To get started, clone the repo into your local workspace. Checkout the `start` branch to get started.

```
git checkout start
```

If you ever fall behind, use the following commands (replace `N` with the step number):
```
git reset --hard

git checkout stepN
```
*Note: You may need to use `git checkout stepN --force` when going from step to
step since we will be creating files.*

* Step 1: Installation
  * *In this step we create a new SvelteKit project from scratch*
  * Create a new SvelteKit project using npm ([docs](https://kit.svelte.dev/docs/creating-a-project))
  * Create the project in the current directory.
  * For this walkthrough we don't need to worry about type checking, linting, or
    tests, so ignore those options. *Do* use Prettier for formatting however.
  * In the terminal, install the dependencies using `npm install`.
  * You can also use `npm run format` to format all the files in case you
    changed the formatting configuration.
  * To effectively develop a Svelte app, the Svelte team recommends using VSCode
    and the official [VSCode Svelte
    extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).
  * Use `npm run dev` to start the development server and open it at [localhost:5173](localhost:5173).
* Step 2: Introduction and creating a simple counter
  * *In this step we create a simple counter to demo the Svelte basics*
  * Svelte components consist of 3 sections: scripts, markup, and styles
    * Logic (JavaScript) goes in the `<script>` tag
      * Use the `let` keyword to automatically create state (e.g. `let count = 0`)
    * Styles (CSS) go in the `<style>` tag
      * Styles are scoped to the work only in the component
    * Markup (HTML) goes anywhere outside of these tags
      * Use brackets `{}` to include non-HTML (e.g. `<h2>{count}</h2>`)
  * Use the `on:click` directive in button elements to do something on click (see below).
```svelte
<button on:click={() => count++}>Click Me!</button>
```

* Step 3: Pages and file-based routing
  * *In this step we create a `comments` page using file based routing*
  * See the [routing documentation](https://kit.svelte.dev/docs/routing) for
    information about file-based routing. Essentially, client-side routes are automatically
    generated for each `+page.svelte` file you create. For example,
    `routes/comments/+page.svelte` will be loaded when you navigate to
    `localhost:5173/comments`
  * Pages are just Svelte components, there is no real difference between a
    `+page.svelte` file and any other `.svelte` file other than the
    `+page.svelte` component will be shown at specific URL routes.
* Step 4: File Based Routing with Layouts
  * *In this step we create a simple Navbar using SvelteKit's layout components and create some global styles*
  * Layouts are another special type of Svelte component. Read their
    documentation [here](https://kit.svelte.dev/docs/routing#layout).
  * Layouts display the same thing no matter what route you visit (as long as it
    is a route nested under that layout). A common example of this would be a
    Navbar.
  * Make sure to use a `<slot>` tag for the page content that goes in that layout.
  * **Tip:** Global CSS can be imported in the `+layout.svelte` file. We can
    create an `app.css` file in the `src` folder an import it, which will
    automatically apply the styles across our entire app.
* Step 5: Basic logic, components, and props
  * *In this step we create an array of comments and display them as reusable `<Comment>` components*
  * Often times we have an array of data we want to display in our markup. For
    this, we `#each` blocks to loop through data. Check out the documentation
    [here](https://svelte.dev/docs#template-syntax-each), or go through the
    [interactive tutorial](https://svelte.dev/tutorial/each-blocks).
  * Sometimes we want to display certain content dependending on certain
    conditions. To accomplish this, use `#if` conditional blocks in your markup.
    See the full documentation
    [here](https://svelte.dev/docs#template-syntax-if) or go through the
    [interactive tutorial](https://svelte.dev/tutorial/if-blocks).
  * To create a resuable component, we can just create a new component in the
    `src/lib/` directory generated for us by SvelteKit (i.e. `Comment.svelte`).
    * From there, we can receive props by using the syntax `export let
      propName;` - unfortunately this is a bit unintuitive!
    * To pass in props, we use the same `attirubte={data}` syntax within elements.
  * Here we create a local array of comments data in the comments page and use
    loop rendering to render the reusable comment components.  
* Step 6: Stores
  * *In this step we replace the local comments array and make it into a global store*
  * Often times web apps have a lot of global state, such as a logged-in user or
    a color theme. Instead of passing down the state through the component
    hierarchy, we can pass down that data directly to components that need it
    using stores.
  * Svelte's documentation on stores can be found [here](https://svelte.dev/tutorial/if-blocks).
  * To create a store, open a JavaScript file and write the following code,
    putting any data in `writable`'s argument:

```js
import { writable } from 'svelte/store';

export const Store = writable("initial data");
```
   * To then access the store's data, import the store into your Svelte component
   and access its value with `$StoreName`.
   * The `$` will automatically subscribe you to changes from the store. For example:

```svelte
<script>
  import { Store } from "./store"
</script>

<!-- Your page will automatically rerender when the store's value changes -->
<h1>{$Store}</h1>
```

* Step 7: Updating stores and bindings
  * *In this step we create an input form to add comments to the page*
  * To update a store’s value, simply import the store and call its `update`
    function!
    * The `update` function takes in a callback function; the callback has a
      single parameter, the current value in the store, which you have access
      to.
  * To keep track of user input, use `bind:value={someState}`. The value will
    then be saved to your component’s state. See the `bind` directive
    [documentation](https://svelte.dev/docs#template-syntax-element-directives-bind-property)
    or go through the [tutorial](https://svelte.dev/tutorial/text-inputs).
* Step 8: Deleting comments
  * *In this step we allow users to delete individual comments*
  * Here we add a "delete" button on *each* comment. When the button is clicked,
    we remove that comment from the array of comments so that the comment disappears.
  * Because we are using a global store, we can do this all in `Comment.svelte`
    by accessing and modifying the comments store.   
* Step 9: Adding animations
  * *In this step we add some basic transitions to the comments list and the pages*
  * Svelte provides a plethora of transition and animation features out of the box.
  * Transitions can be applied to individual components and will usually activate when
    they are mounted and/or unmounted. Documentation can be found
    [here](https://svelte.dev/docs/svelte-transition).
  * Svelte also allows us to add transitions between pages using view
    transitions. Check out the documentation
    [here](https://svelte.dev/blog/view-transitions).
  * Let's animate the comments to fly in/out when being added/deleted, and add a
    transition animation between the home and comments page. 

## Extra Resources
### Official Pages

- [Svelte Documentation](https://svelte.dev/docs)
- [Svelte Tutorial](https://svelte.dev/tutorial) (great walkthrough of the basics)
- [SvelteKit Documentation](https://kit.svelte.dev/docs/introduction)
- [Svelte REPL](https://svelte.dev/repl/) (online playground)

### Other Tutorials

- [Svelte in 100s](https://www.youtube.com/watch?v=rv3Yq-B8qp4) (Fireship)
- [Svelte Crash Course](https://www.youtube.com/watch?v=3TVy6GdtNuQ) (good
  overall introduction, what this workshop is based on)
- [Learn SvelteKit YouTube Playlist](https://youtube.com/playlist?list=PLA9WiRZ-IS_zfHpxmztJQLeBISsQkh9-M) (extremely detailed and in-depth walkthrough of Svelte and SvelteKit)

### Developer Tools

- [Create a SvelteKit project](https://kit.svelte.dev/docs/creating-a-project)
- [Svelte VSCode Extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [Svelte Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/svelte-devtools/ckolcbmkjpjmangdbmnkpjigpkddpogn)


