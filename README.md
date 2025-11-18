# Job_Search_Website
                   ┌─────────────────────────────────────┐
                   │            index.html               │
                   │   (Structure + Layout + Modals)     │
                   └─────────────────────────────────────┘
                                   │
                                   │  Loads / Links
                                   ▼
        ┌────────────────────────────────────────────────────────────────────┐
        │                             Frontend UI                            │
        │  • Navbar (Home, About, Login/Register)                            │
        │  • Mobile Menu                                                     │
        │  • Job Filters Sidebar                                             │
        │  • Job List Grid                                                   │
        │  • Popups: Notification, About Us, Contact, Login Prompt           │
        │  • Modals: Login Modal, Register Modal                             │
        └────────────────────────────────────────────────────────────────────┘
                                   │
                                   │  Styled by
                                   ▼
                   ┌─────────────────────────────────────┐
                   │              style.css              │
                   │    (Custom Theme + Tailwind mix)    │
                   │                                     │
                   │ • Page background, fonts            │
                   │ • Job card color theme              │
                   │ • Navbar styling                    │
                   │ • Buttons, search bar, filters      │
                   │ • Modals, popup animations          │
                   │ • Mobile responsive behavior        │
                   └─────────────────────────────────────┘
                                   │
                                   │  Interactivity / Logic
                                   ▼
                   ┌────────────────────────────────────────┐
                   │                script.js               │
                   │ (All Dynamic Logic + Event Handling)   │
                   │                                        │
                   │ • Job dataset (mock data array)        │
                   │ • Filtering logic (search, type, exp)  │
                   │ • Dynamic DOM rendering of job cards   │
                   │ • Share button & URL copy actions      │
                   │ • Debounced search                     │
                   │ • Apply Now → Login prompt             │
                   │ • Login & Register modal controls      │
                   │ • Mobile menu toggle                   │
                   │ • Contact form submit                  │
                   │ • About & Contact popups               │
                   └────────────────────────────────────────┘
                                   │
                                   │  Uses / Manipulates
                                   ▼
       ┌──────────────────────────────────────────────────────────────┐
       │                      Document Object Model (DOM)             │
       │  • Adds job cards dynamically                                │
       │  • Toggles modal visibility                                  │
       │  • Updates filters based on user actions                     │
       │  • Shows/hides mobile menu                                   │
       │  • Handles popup state                                       │
       └──────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
                   ┌─────────────────────────────────────┐
                   │         External Resources          │
                   │─────────────────────────────────────│
                   │ • TailwindCSS CDN                   │
                   │ • Google Fonts (Poppins)            │
                   │ • FontAwesome Icons                 │
                   └─────────────────────────────────────┘
