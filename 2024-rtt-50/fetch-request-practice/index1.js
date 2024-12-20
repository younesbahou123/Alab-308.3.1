import "./styles.css";
//DOM Manipulation (Part one)
//part 1
/*
Select and cache the <main> element in a variable named mainEl.
Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
Add a class of flex-ctr to mainEl.
Hint: Use the Element.classList API.
*/
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");
// part2:
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// part 3
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
// Assume `topMenuEl` is a reference to the top menu element in your HTML
const ttopMenuEl = document.getElementById("top-menu"); // Replace 'topMenu' with your element's ID

// Iterate over the menuLinks array
menuLinks.forEach(function (link) {
  // Create a new <a> element
  const a = document.createElement("a");

  // Set the href attribute
  a.setAttribute("href", link.href);

  // Set the text content
  a.textContent = link.text;

  // Append the <a> element to the topMenuEl
  ttopMenuEl.appendChild(a);
});
// part 4
//DOM Manipulation (Part Two)
//Part 2: Adding Additional HTML and CSS
//Part 3: Creating the Submenu
/*
Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
Set the height subMenuEl element to be "100%".
Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
Add the class of flex-around to the subMenuEl element.
*/
const subMenuEl = document.getElementById("subMenuEl");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//Part 4: Adding Menu Interaction
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

/*In order to add interaction:
Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
Attach a delegated 'click' event listener to topMenuEl.
The first line of code of the event listener function should call the event object's preventDefault() method.
The second line of code of the function should immediately return if the element clicked was not an <a> element.
Log the content of the <a> to verify the handler is working.*/
const topMenuLinks = document.topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", function (event) {
  Event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  console.log(event.target.textContent);
});

/*
The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
Hint: Removing a non-existent class from an element does not cause an error!
*/
// Select all <a> elements in topMenuLinks
topMenuLinks = document.querySelectorAll(".top-menu a");

// Add an event listener to each <a> element
topMenuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior (e.g., navigation)

    // Remove the 'active' class from all links
    topMenuLinks.forEach((link) => link.classList.remove("active"));

    // Toggle the 'active' class for the clicked link
    if (!this.classList.contains("active")) {
      this.classList.add("active");
    }
  });
});

//Part 5: Adding Submenu Interaction

topMenuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default navigation

    // Remove 'active' class from all links
    topMenuLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link if it wasn't active
    if (!this.classList.contains("active")) {
      this.classList.add("active");

      // Find the corresponding menu object
      const clickedLink = menuLinks.find(
        (item) => item.link === this.getAttribute("href")
      );

      // Check if it has subLinks
      if (clickedLink && clickedLink.subLinks) {
        // Show submenu
        subMenuEl.style.top = "100%";
      } else {
        // Hide submenu
        subMenuEl.style.top = "0";
      }
    } else {
      // Hide submenu if the link was already active
      subMenuEl.style.top = "0";
    }
  });
});

function buildSubMenu(subLinks) {
  // Clear the current contents of subMenuEl
  subMenuEl.innerHTML = "";

  // Iterate over the subLinks array
  subLinks.forEach((link) => {
    // Create an <a> element
    const subMenuLink = document.createElement("a");

    // Set the href attribute
    subMenuLink.setAttribute("href", link.link);

    // Set the text content
    subMenuLink.textContent = link.text;

    // Append the <a> element to subMenuEl
    subMenuEl.appendChild(subMenuLink);
  });
}

topMenuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default navigation

    // Remove 'active' class from all links
    topMenuLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link if it wasn't active
    if (!this.classList.contains("active")) {
      this.classList.add("active");

      // Find the corresponding menu object
      const clickedLink = menuLinks.find(
        (item) => item.link === this.getAttribute("href")
      );

      // Check if it has subLinks
      if (clickedLink && clickedLink.subLinks) {
        // Build and display submenu
        buildSubMenu(clickedLink.subLinks);
        subMenuEl.style.top = "100%";
      } else {
        // Hide submenu if no subLinks
        subMenuEl.style.top = "0";
      }
    } else {
      // Hide submenu if the link was already active
      subMenuEl.style.top = "0";
    }
  });
});

// 1. Attach a delegated 'click' event listener to subMenuEl
subMenuEl.addEventListener("click", function (event) {
  // Call preventDefault() on the event object
  event.preventDefault();
  // Return if the clicked element is not an <a> element
  if (event.target.tagName !== "A") return;
  // Log the content of the <a> element
  console.log(event.target.textContent);
  // Set the CSS 'top' property of subMenuEl to 0
  subMenuEl.style.top = "0";
  // Remove the 'active' class from each <a> element in topMenuLinks
  topMenuLinks.forEach((link) => link.classList.remove("active"));
  // Update the contents of mainEl with an <h1> showing the clicked <a> content
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  // Special handling for "About" link
  if (event.target.textContent === "ABOUT") {
    mainEl.innerHTML = "<h1>About</h1>";
  }
});
