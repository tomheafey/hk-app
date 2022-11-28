import { render } from "@testing-library/react";
import NotchDisplay from "../../../shared/components/NotchDisplay";

const fullNotch = require("../../../shared/images/full notch.png");
const notchesArray = Array(11).fill(fullNotch);

const customRender = () => {
    return render(<NotchDisplay notchesArray={notchesArray} />);
};

describe("Notch Display", () => {
    describe("Rendering", () => {
        it("should have correct amount of images", () => {
            const { baseElement } = customRender();
            const imgs = baseElement.querySelectorAll("img");
            expect(imgs.length).toBe(notchesArray.length);
        });
        it("should have correct image src", () => {
            const { baseElement } = customRender();
            const img = baseElement.querySelector("img");
            expect(img.src.split("%20").join(" ")).toBe(`http://localhost/${fullNotch}`);
        });
    });
});
