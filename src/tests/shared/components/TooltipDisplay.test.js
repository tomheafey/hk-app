import { render } from "@testing-library/react";
import TooltipDisplay from "../../../shared/components/TooltipDisplay";

const fullNotch = require("../../../shared/images/full notch.png");

const dummyCharm = {
    id: "sharpShadow",
    name: "Sharp Shadow",
    pngName: "Sharp_Shadow",
    notches: 2,
    flavorText: "Contains a forbidden spell that transforms shadows into deadly weapons. When using Shadow Dash, the bearer's body will sharpen and damage enemies.",
    effectText: ["Damages enemies for 1x Nail damage when dashing through them", "When using Shade Cloak, increases shadow dash length by 40%"],
};

const dummyWithoutNotches = {
    id: "voidHeart",
    name: "Void Heart",
    pngName: "Void_Heart",
    notches: 0,
    flavorText:
        "An emptiness that was hidden within, now unconstrained. Unifies the void under the bearer's will. This charm is a part of its bearer and can not be unequipped. (Secondary Effect: Grants access to multiple endings, locks out all other endings. Removes hostility from some enemy types.)",
    effectText: ["Cannot be unequipped", "Renders the Siblings, Void Tendrils and Shade passive", "Unlocks 4 endings and allows access to the Radiance and Godmaster content"],
};

const customRender = (charm) => {
    return render(<TooltipDisplay charm={charm} />);
};

describe("Tooltip Display", () => {
    describe("Rendering", () => {
        it("should display charm name and flavor text", () => {
            const { queryByText } = customRender(dummyCharm);
            const name = queryByText(dummyCharm.name);
            const flavor = queryByText(dummyCharm.flavorText);
            expect(name).toBeTruthy;
            expect(flavor).toBeTruthy;
        });

        it("should not display notches if 0 notches", () => {
            const { baseElement } = customRender(dummyWithoutNotches);
            const img = baseElement.querySelector("img");
            expect(img).toBeFalsy;
        });

        it("should display correct amount of notch images if nonzero", () => {
            const { baseElement } = customRender(dummyCharm);
            const imgs = baseElement.querySelectorAll("img");
            expect(imgs.length).toBe(dummyCharm.notches);
            expect(imgs[0].src.split("%20").join(" ")).toBe(`http://localhost/${fullNotch}`);
        });

        it("should display all effect texts in list", () => {
            const { baseElement, queryByText } = customRender(dummyCharm);
            const lis = baseElement.querySelectorAll("li");
            expect(lis.length).toBe(dummyCharm.effectText.length);
            const e1 = queryByText(dummyCharm.effectText[0]);
            const e2 = queryByText(dummyCharm.effectText[1]);
            expect(e1).toBeTruthy;
            expect(e2).toBeTruthy;
        });
    });
});
