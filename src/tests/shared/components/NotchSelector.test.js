import { render, fireEvent } from "@testing-library/react";
import NotchSelector from "../../../shared/components/NotchSelector";

const notchTotal = 10;
const handleToggleMock = jest.fn();

const customRender = () => {
    return render(<NotchSelector notchTotal={notchTotal} handleToggle={handleToggleMock} />);
};

describe("Notch Selector", () => {
    describe("Rendering", () => {
        it("should generate the right amount of images", () => {
            const { baseElement } = customRender();
            const imgs = baseElement.querySelectorAll("img");
            expect(imgs.length).toBe(notchTotal);
        });
        it("should have two buttons", () => {
            const { baseElement } = customRender();
            const buttons = baseElement.querySelectorAll("button");
            expect(buttons.length).toBe(2);
        });
    });
    describe("Functionality", () => {
        it("should call the function on click", () => {
            //need to pass notch total as argument so we can test inc/dec
            const { queryByText } = customRender();
            const minus = queryByText("–");
            const plus = queryByText("+");
            expect(minus).toBeTruthy;
            expect(plus).toBeTruthy;

            expect(handleToggleMock.mock.calls.length).toBe(0);
            fireEvent.click(minus);
            expect(handleToggleMock.mock.calls[0][0]);
        });
    });
});
