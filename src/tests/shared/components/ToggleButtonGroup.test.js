import { render, fireEvent } from "@testing-library/react";
import ToggleButtonGroup from "../../../shared/components/ToggleButtonGroup";

const setHasBetterItemMock = jest.fn();
const betterItemName = "Shade Soul";
const betterItemVal = "shadeSoul";
const worseItemName = "Vengeful Spirit";
const worseItemVal = "vengefulSpirit";
const betterItemPic = require("../../../shared/images/shade soul.png");
const worseItemPic = require("../../../shared/images/vengeful spirit.png");
const removeCharmMock = jest.fn();

const customRender = (hasBetterItem) => {
    return render(
        <ToggleButtonGroup
            hasBetterItem={hasBetterItem}
            setHasBetterItem={setHasBetterItemMock}
            betterItemName={betterItemName}
            betterItemVal={betterItemVal}
            worseItemName={worseItemName}
            worseItemVal={worseItemVal}
            betterItemPic={betterItemPic}
            worseItemPic={worseItemPic}
            removeCharm={removeCharmMock}
        />
    );
};

describe("Toggle Button Group", () => {
    describe("Rendering", () => {
        it("should render two buttons", () => {
            const { baseElement } = customRender(true);
            const buttons = baseElement.querySelectorAll("button");
            expect(buttons.length).toBe(2);
        });
        it("should have correct image and text on buttons", () => {
            const { queryByText, baseElement } = customRender(true);
            const text1 = queryByText(betterItemName);
            const text2 = queryByText(worseItemName);
            expect(text1).toBeTruthy;
            expect(text2).toBeTruthy;

            const imgs = baseElement.querySelectorAll("img");
            expect(imgs[0].src.split("%20").join(" ")).toBe(`http://localhost/${betterItemPic}`);
            expect(imgs[1].src.split("%20").join(" ")).toBe(`http://localhost/${worseItemPic}`);
        });
    });

    describe("Functionality", () => {
        it("should call function correctly for enabled button (worse button)", () => {
            const { queryByText } = customRender(true);
            const betterButton = queryByText(betterItemName);
            const worseButton = queryByText(worseItemName);

            expect(betterButton).toBeInTheDocument();
            expect(worseButton).toBeInTheDocument();

            expect(setHasBetterItemMock.mock.calls.length).toBe(0);

            fireEvent.click(worseButton);
            expect(setHasBetterItemMock.mock.calls.length).toBe(1);
            expect(setHasBetterItemMock.mock.calls[0][0]).toBe(false);

            fireEvent.click(betterButton);
            expect(setHasBetterItemMock.mock.calls.length).toBe(1);
            expect(setHasBetterItemMock.mock.calls[0][0]).toBe(false);
        });

        it("should call function correctly for enabled button (better button)", () => {
            const { queryByText } = customRender(false);
            const betterButton = queryByText(betterItemName);
            const worseButton = queryByText(worseItemName);

            expect(betterButton).toBeInTheDocument();
            expect(worseButton).toBeInTheDocument();

            expect(setHasBetterItemMock.mock.calls.length).toBe(0);

            fireEvent.click(betterButton);
            expect(setHasBetterItemMock.mock.calls.length).toBe(1);
            expect(setHasBetterItemMock.mock.calls[0][0]).toBe(true);

            fireEvent.click(worseButton);
            expect(setHasBetterItemMock.mock.calls.length).toBe(1);
            expect(setHasBetterItemMock.mock.calls[0][0]).toBe(true);
        });
    });
});
