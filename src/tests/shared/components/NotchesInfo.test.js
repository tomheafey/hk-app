// test t/f on boolean
//test render on notchdisplay somehow
import { render } from "@testing-library/react";
import NotchesInfo from "../../../shared/components/NotchesInfo";

const customRender = (isOvercharmed) => {
    return render(<NotchesInfo isOvercharmed={isOvercharmed} notchesArray={[]} />);
};

describe("Notches Info", () => {
    describe("Rendering", () => {
        it("should show message if overcharmed", () => {
            const { queryByText } = customRender(true);
            const text = queryByText("OVERCHARMED");
            expect(text).toBeTruthy;
        });
        it("should not show message if not overcharmed", () => {
            const { queryByText } = customRender(false);
            const text = queryByText("OVERCHARMED");
            expect(text).toBeFalsy;
        });
    });
});
