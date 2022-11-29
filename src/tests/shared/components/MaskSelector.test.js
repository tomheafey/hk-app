import { fireEvent, render } from "@testing-library/react";
import MaskSelector from "../../../shared/components/MaskSelector";

const setBaseHPMock = jest.fn();

const customRender = (baseHP) => {
    return render(<MaskSelector baseHP={baseHP} setBaseHP={setBaseHPMock} />);
};

describe("Mask Selector", () => {
    describe("Rendering", () => {
        it("should render the right amount of images", () => {
            const { baseElement } = customRender(7);
            const images = baseElement.querySelectorAll("img");
            expect(images.length).toBe(7);
        });
    });
    describe("Functionality", () => {
        it("should call function if minus button pushed and not below threshold", () => {
            const { queryByText } = customRender("6");
            const minus = queryByText("–");
            expect(setBaseHPMock.mock.calls.length).toBe(0);
            fireEvent.click(minus);
            expect(setBaseHPMock.mock.calls.length).toBe(1);
        });
        it("should not call function if minus button pushed and masks are below threshold", () => {
            const { queryByText } = customRender("5");
            const minus = queryByText("–");
            expect(setBaseHPMock.mock.calls.length).toBe(0);
            fireEvent.click(minus);
            expect(setBaseHPMock.mock.calls.length).toBe(0);
        });
        it("should call function if plus button pushed and not above threshold", () => {
            const { queryByText } = customRender("8");
            const plus = queryByText("+");
            expect(setBaseHPMock.mock.calls.length).toBe(0);
            fireEvent.click(plus);
            expect(setBaseHPMock.mock.calls.length).toBe(1);
        });
        it("should not call function if plus button pushed and masks are above threshold", () => {
            const { queryByText } = customRender("9");
            const plus = queryByText("+");
            expect(setBaseHPMock.mock.calls.length).toBe(0);
            fireEvent.click(plus);
            expect(setBaseHPMock.mock.calls.length).toBe(0);
        });
    });
});
