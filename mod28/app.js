// console.log("hi");

// const req = new XMLHttpRequest();
// req.onload = function () {
//     console.log("loaded");
//     const j = JSON.parse(this.responseText)
//     console.log(j.name, j.height);
// }
// req.onerror = function () {
//     console.log("error");
// }
// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

// fetch("https://swapi.tech/api/people/1/")
//     .then((res) => {
//         console.log("RESOLVED!", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data.result.properties);
//     })
//     .catch((e) => {
//         console.log("ERROR!", e);
//     });

// async function named() {
//     try {
//         const ob = await fetch("https://swapi.tech/api/people/1/");
//         const data = await ob.json();
//         console.log(data.result.properties);
//     }
//     catch (e) {
//         console.log(e);
//     }
// };
// named();
async function named(id) {
    try {
        const ob = await axios.get(`https://swapi.tech/api/people/${id}/`);
        console.log(ob.data.result.properties);
    }
    catch (e) {
        console.log(e);
    }
};
named(1);
named(2);
named(3);