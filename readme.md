# Finora - Personal Finance Tracker

**One of my biggest projects to date (21/06/2026)!**

A clean, modern, and minimalist personal finance tracker where you can easily add income & expenses, monitor your balance in real-time, and keep a clean history of all your transactions.

![example1](https://scontent.fvca2-1.fna.fbcdn.net/v/t1.15752-9/729848859_1862260504732801_1591902744660990153_n.png?stp=dst-png_p394x394&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGzyoh0eT81pVNtkQsMgr4sA21zKmDt9DgDbXMqYO30OOWYg6y96AvZ2pH-pgB9E1CGtXJPvkzEQdhHShW07F7w&_nc_ohc=eijSkFeuIngQ7kNvwFQCqe9&_nc_oc=AdotAHGqGYjEwmaCl4SW4XlEDBzBE04uNOxVK8DsuzUP1WeCz-U8_FhKU_RToWoQBRr-jtgs_z6oMQ_3afw45Kvd&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fvca2-1.fna&_nc_ss=7a22e&oh=03_Q7cD5gEwefeE9Drz0nVHvWixfTtj2xgyEN2PFeHs-cnNgOpgFQ&oe=6A5F4D50)
![example2](https://scontent.fvca2-1.fna.fbcdn.net/v/t1.15752-9/724238979_1036256452194157_4096864588357612723_n.png?stp=dst-png_p394x394&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFWTO9EixswdZmH285jZVkUveHX_sfBUaS94df-x8FRpGrrNub2SScp3wGjZBXijpqmkEzsn9gIEs4KR_BthhMK&_nc_ohc=rSnDr2yyNecQ7kNvwGEQ2Q3&_nc_oc=Adql0bW7Nz-S0N9O9YAAJ_3tEDsff40wo0LfyPpR9AqAJJp9hAP5BTVo9GMIIRMcFyrLvVx8Kk6KbsJ52fFPS8SH&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fvca2-1.fna&_nc_ss=7a22e&oh=03_Q7cD5gEsTFJDo8sqP0XVpbkw6ROVnRvBKer8w6MlJcyoVuuQNQ&oe=6A5F6722)

### How to run it

You can download the project or try it online https://personal-finance-tracker-61926.vercel.app/.

### Features

- Beautiful premium dashboard with glassmorphism design
- Three summary cards: Total Balance, Income (green), and Expenses (red)
- Simple form to add new transactions (description, amount, type)
- Scrollable transaction history with delete buttons
- Data persistence using `localStorage` (your data stays after refreshing)
- Fully responsive and clean UI with elegant typography
- Clear All button to reset everything

### How does it work?

All transactions are stored as JavaScript objects and saved in the browser's `localStorage`. When you add a transaction, the app automatically updates the balance, income, and expense totals. The history shows the latest transactions first and allows deleting individual entries.

The code is split into three clean files (`index.html`, `style.css`, `script.js`) for better organization. No external frameworks — just pure HTML, CSS, and Vanilla JavaScript.

### Things I learned while making this project

- How to effectively use `localStorage` for data persistence
- Better DOM manipulation and dynamic list rendering
- Creating clean, modern UI with glassmorphism and good whitespace
- Managing state (balance, income, expense) across multiple UI elements
- Building a responsive dashboard from scratch

### Conclusion

This project was an incredible learning experience and a lot of fun to think out and build. It forced me to step up my JavaScript game, especially in handling data persistence and managing state changes without relying on heavy backend tools. Building a clean, real-time dollar tracker has really helped me understand how financial data flows in a web application.

I hope this tracker helps you keep your budget organized and under control just like it did for me. Have a good rest of your day to whoever is reading this, and thanks for checking out my project!

---

## 📝 Note for Reviewers regarding Hackatime.

I originally started this local repository planning to build a Weather App. However, after working on it for a while, I decided to switch to a more useful and practical project — a Personal Finance Tracker. Because I continued working inside the same folder, Hackatime tracked all my 5+ hours of effort under the old project name "weather".

Please rest assured that **100% of the code and final product inside this repository belongs to the Finance Tracker**.
