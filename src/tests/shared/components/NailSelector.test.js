import { fireEvent, render } from "@testing-library/react";
import NailSelector from "../../../shared/components/NailSelector";

const setNailLevelMock = jest.fn();

const customRender = (nailLevel) => {
    return render(<NailSelector nailLevel={nailLevel} setNailLevel={setNailLevelMock} />);
};

describe("Nail Selector", () => {
    describe("Rendering", () => {
        it("should render 5 buttons", () => {
            const { baseElement } = customRender();
            const buttons = baseElement.querySelectorAll("button");
            expect(buttons.length).toBe(5);
        });
    });
    describe("Functionality", () => {
        it("should call function non-selected button is clicked", () => {
            const { queryByText } = customRender("pure");
            const coiledButton = queryByText("Coiled");
            expect(setNailLevelMock.mock.calls.length).toBe(0);
            fireEvent.click(coiledButton);
            expect(setNailLevelMock.mock.calls.length).toBe(1);
        });
        it("should not call function if selected button is clicked ", () => {
            const { queryByText } = customRender("pure");
            const coiledButton = queryByText("Pure");
            expect(setNailLevelMock.mock.calls.length).toBe(0);
            fireEvent.click(coiledButton);
            expect(setNailLevelMock.mock.calls.length).toBe(0);
        });
    });
});
