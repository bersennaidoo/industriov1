import InputFormControl from "./InputFormControl";
// Component test for generic form control

describe("InputFormControl", () => {
  it("should render a form control of type radio name valet parking", () => {
    // mount component
    const parkingtype = "valet parking";
    cy.mount(<InputFormControl parkingtype={parkingtype} />);

    // assert component has radio control
    cy.getByCy("parking-options").should("exist");
  });

  it("should render a form control of type radio name short term parking", () => {
    // mount component
    const parkingtype = "short term parking";
    cy.mount(<InputFormControl parkingtype={parkingtype} />);

    // assert component has radio control
    cy.getByCy("parking-options").should("exist");
  });

  it("should render a form control of type radio name long term parking", () => {
    // mount component
    const parkingtype = "long term parking";
    cy.mount(<InputFormControl parkingtype={parkingtype} />);

    // assert component has radio control
    cy.getByCy("parking-options").should("exist");
  });
});
