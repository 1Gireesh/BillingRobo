let nav = document.querySelector('nav');
nav.innerHTML = `
<style>
* {
    margin: 1px;
    padding: 0;
  }
  nav > ul {
    display: flex;
    width: 100vw;
    list-style: none;
    justify-content: center;
    gap: 50px;
    box-shadow: 2px 2px 10px rgb(0, 0, 0);
    background-color: rgba(115, 0, 255, 0.934);
    padding: 10px;
  }
  ul > li > a {
    text-decoration: none;
    font-size: 20px;
    color: black;
    position: relative;
    /* text-shadow: 1px 1px 10px rgb(255, 255, 255); */
  }
  
  a:after {
    margin: 3px;
    position: absolute;
    content: "";
    width: 0;
    height: 3px;
    background-color: red;
    opacity: 0;
    left: 0;
    top: 25px;
    transition: all 1s ease;
  }
  a:hover:after {
    width: 100%;
    opacity: 1;
  }
  a:hover {
    color: white;
    text-shadow: 2px 2px 5px red;
  }
  
</style>

<ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Bill/total</a></li>
            <li><a href="#">Add/remove product</a></li>
        </ul>
`