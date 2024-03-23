class TvSamsung {
    #brand = "Samsung";
    #connect;

    constructor(brand, connect) {
        this.#brand = brand;
        this.#connect = connect;
    }

    getBrand() {
        return this.#brand;
    }

    setBrand(brand) {
        this.#brand = brand;
    }

    getConnect() {
        return this.#connect;
    }

    setConnect(connect) {
        this.#connect = connect;
    }

    toConnectTv(brand) {
        if (brand.toLowerCase() === this.getBrand().toLowerCase()) {
            this.setConnect(true);
            return {
                message: "TV Ligada",
                status: true,
            };
        }
        return {
            message: `O controle da marca ${brand} não pode ligar essa TV`,
            status: false,
        };
    }

    toOffTv(brand) {
        if (brand.toLowerCase() === this.getBrand().toLowerCase()) {
            this.setConnect(false);
            return {
                message: "TV Desligada",
                status: true,
            };
        }
        return {
            message: `O controle da marca ${brand} não pode desligar essa TV`,
            status: false,
        };
    }
}

class TvLg extends TvSamsung {
    constructor() {
        super("LG", false);
    }
}

class ControlTv {
    #brand;

    constructor(brand) {
        this.#brand = brand;
    }

    getBrand() {
        return this.#brand;
    }

    setBrand(brand) {
        this.#brand = brand;
    }
}

const tvs = [];

document.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-id")) {
        const selectControl = document.querySelector("#control").value;
        const id = e.target.getAttribute("data-id");
        let response = {};

        if (tvs[id].getBrand().toLowerCase() === selectControl.toLowerCase()) {
            e.target.classList.toggle("on");
        }

        if (tvs[id].getConnect()) {
            response = tvs[id].toOffTv(selectControl);
        } else {
            response = tvs[id].toConnectTv(selectControl);
        }

        toastMessageEvent(response);
    }
});

function toastMessageEvent(response) {
    const toastContainer = document.querySelector(".toast-container");
    const toastMessage = document.querySelector(".toast-message");

    toastContainer.classList.remove("true", "false");
    toastMessage.innerHTML = response.message;
    toastContainer.classList.add(response.status ? "true" : "false");

    setTimeout(() => {
        toastContainer.classList.remove("true", "false");
    }, 5000);
}

function createTv() {
    Array.from({ length: 4 }).forEach((__, index) => {
        const tv = index < 2 ? new TvSamsung("Samsung", false) : new TvLg("LG", false);
        tvs.push(tv);
    });

    createTvsList();
}

function createTvsList() {
    const tvsList = document.querySelector(".tvs-list");

    tvs.forEach((tv, index) => {
        const div = document.createElement("div");
        div.innerHTML = `<span>${tv.getBrand()}</span>`;
        div.classList.add("tv");
        div.setAttribute("data-id", index);
        tvsList.appendChild(div);
    });
}

window.onload = createTv();
