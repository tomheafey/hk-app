import { fireEvent, render } from "@testing-library/react";
import DamageOutputInfo from "../../../shared/components/DamageOutputInfo";

const customRender = (
    hasShadeSoul,
    hasDescendingDark,
    hasAbyssShriek,
    baseNailDamage,
    baseFireballDamage,
    baseDiveDamage,
    baseShriekDamage,
    currentNailDamage,
    currentFireballDamage,
    currentDiveDamage,
    currentShriekDamage
) => {
    return render(
        <DamageOutputInfo
            hasShadeSoul={hasShadeSoul}
            hasDescendingDark={hasDescendingDark}
            hasAbyssShriek={hasAbyssShriek}
            baseNailDamage={baseNailDamage}
            baseFireballDamage={baseFireballDamage}
            baseDiveDamage={baseDiveDamage}
            baseShriekDamage={baseShriekDamage}
            currentNailDamage={currentNailDamage}
            currentFireballDamage={currentFireballDamage}
            currentDiveDamage={currentDiveDamage}
            currentShriekDamage={currentShriekDamage}
        />
    );
};

describe("Damage Output Info", () => {
    describe("Rendering", () => {
        it("should display base spells if selected (and not upgraded ones)", () => {
            const { queryByText } = customRender(false, false, false, 1, 1, 1, 1, 1, 1, 1, 1);
            const text1 = queryByText("Vengeful");
            expect(text1).toBeTruthy;
            const text2 = queryByText("Desolate");
            expect(text2).toBeTruthy;
            const text3 = queryByText("Howling");
            expect(text3).toBeTruthy;
            const text4 = queryByText("Shade");
            expect(text4).toBeFalsy;
            const text5 = queryByText("Descending");
            expect(text5).toBeFalsy;
            const text6 = queryByText("Abyss");
            expect(text6).toBeFalsy;
        });
        it("should display upgraded spells if selected (and not base ones)", () => {
            const { queryByText } = customRender(true, true, true, 1, 1, 1, 1, 1, 1, 1, 1);
            const text1 = queryByText("Shade");
            expect(text1).toBeTruthy;
            const text2 = queryByText("Descending");
            expect(text2).toBeTruthy;
            const text3 = queryByText("Abyss");
            expect(text3).toBeTruthy;
            const text4 = queryByText("Vengeful");
            expect(text4).toBeFalsy;
            const text5 = queryByText("Desolate");
            expect(text5).toBeFalsy;
            const text6 = queryByText("Howling");
            expect(text6).toBeFalsy;
        });

        it("should display normal damages if not increased", () => {
            const { baseElement, queryByText } = customRender(true, true, true, 5, 6, 7, 8, 1, 1, 1, 1);
            const spans = baseElement.querySelectorAll("span");
            expect(spans).toBeFalsy;
            const naildmg = queryByText("5");
            expect(naildmg).toBeTruthy;
            const firedmg = queryByText("6");
            expect(firedmg).toBeTruthy;
            const divedmg = queryByText("7");
            expect(divedmg).toBeTruthy;
            const yelldmg = queryByText("8");
            expect(yelldmg).toBeTruthy;
        });

        it("should display increased damages", () => {
            const { baseElement, queryByText } = customRender(true, true, true, 1, 1, 1, 1, 5, 6, 7, 8);
            const spans = baseElement.querySelectorAll("span");
            expect(spans.length).toBe(4);

            const basedmgstr = queryByText("1");
            expect(basedmgstr).toBeFalsy;

            const naildmg = queryByText("5");
            expect(naildmg).toBeTruthy;
            const firedmg = queryByText("6");
            expect(firedmg).toBeTruthy;
            const divedmg = queryByText("7");
            expect(divedmg).toBeTruthy;
            const yelldmg = queryByText("8");
            expect(yelldmg).toBeTruthy;
        });
    });
});
