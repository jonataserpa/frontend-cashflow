import { render } from "@testing-library/react";
import HomePage from "../page";
import "@testing-library/jest-dom";

// Mock useRouter:
jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null,
        };
    },
}));

describe("HomePage - List services", () => {
    it('should render "No services" when the array is empty', () => {
        // ARRANGE
        render(<HomePage />);

        //ACT
        //const message = screen.getByText("Carregando serviços...");

        // ASSERT
        //expect(message).toBeInTheDocument();
    });

    it("should render a list services with the correct number of items", async () => {
        // ARRANGE
        render(<HomePage />);

        // ACT
        //const firstItem = screen.getAllByTestId("SERPRO")[0];

        // ASSERT
        //expect(firstItem).toHaveTextContent("SERPRO");
    });
});
