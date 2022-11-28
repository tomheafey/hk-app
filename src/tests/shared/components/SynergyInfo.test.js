import { render } from "@testing-library/react";
import SynergyInfo from "../../../shared/components/SynergyInfo";

const img1 = require("../../../shared/images/Shaman_Stone.png");
const img2 = require("../../../shared/images/Dreamshield.png");
const img3 = require("../../../shared/images/Dream_Wielder.png");
const img4 = require("../../../shared/images/Shape_of_Unn.png");
const dummySynergies = [
    { firstCharmSrc: img1, secondCharmSrc: img2, effect: "Synergy 1 effect text" },
    { firstCharmSrc: img3, secondCharmSrc: img4, effect: "Synergy 2 effect text" },
];
const dummyEmptySynergies = [];

const customRender = (synergies) => {
    return render(<SynergyInfo synergies={synergies} />);
};

describe("Synergy Info", () => {
    describe("Rendering", () => {
        it("should show message if there are no synergies", () => {
            const { queryByText } = customRender(dummyEmptySynergies);
            const text = queryByText("No charm synergies.");
            expect(text).toBeTruthy;
        });
        it("should display effect texts if there are synergies", () => {
            const { queryByText } = customRender(dummySynergies);
            const text1 = queryByText(dummySynergies[0].effect);
            const text2 = queryByText(dummySynergies[1].effect);
            expect(text1).toBeTruthy;
            expect(text2).toBeTruthy;
        });
        it("should render 2 images per synergy", () => {
            const { baseElement } = customRender(dummySynergies);
            const imgs = baseElement.querySelectorAll("img");
            expect(imgs.length).toBe(4);
            for (let i = 0; i < imgs.length; i++) {
                expect(imgs[i]).toBeTruthy();
            }
            expect(imgs[0].src).toBe("http://localhost/" + dummySynergies[0].firstCharmSrc);
            expect(imgs[1].src).toBe("http://localhost/" + dummySynergies[0].secondCharmSrc);
            expect(imgs[2].src).toBe("http://localhost/" + dummySynergies[1].firstCharmSrc);
            expect(imgs[3].src).toBe("http://localhost/" + dummySynergies[1].secondCharmSrc);
        });
    });
});
