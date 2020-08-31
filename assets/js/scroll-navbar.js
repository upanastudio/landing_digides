            $(document).ready(function() {


                window.onscroll = function() { myFunction() };
                var navbar = document.getElementById("navbar_mobile");
                var logoNav = document.getElementById("logoNavbar");
                var sticky = navbar.offsetTop;
                sticky = sticky + 100;

                function myFunction() {
                    if (window.pageYOffset > sticky) {
                        navbar.classList.add("color-transparant");
                        logoNav.classList.add("nav-logo-sm");
                    } else {
                        navbar.classList.remove("color-transparant");
                        logoNav.classList.remove("nav-logo-sm");
                    }
                }


            });
