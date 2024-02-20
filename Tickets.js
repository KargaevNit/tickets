export const useTickets = () => {
    const url = "http://localhost:5173/";

    let options = {
        frame: {
            width: 600,
            height: 600
        }
    };

    const genFrame = () => {
        const frame = document.createElement("iframe");
        frame.src = url;
        frame.style.width = "100%";
        frame.height = options.frame.height;
        return frame;
    };

    const setOptions = (opt) => {
        options = opt;
    };

    const mount = (selector) => {
        const root = document.querySelector(selector);
        root.innerHTML = "";
        root.append(genFrame());
    };

    return { mount, setOptions };
};