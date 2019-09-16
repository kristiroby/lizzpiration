export const findByTestAttribute = (component, attribute) => {
    const container = component.find(`[data-test='${attribute}']`);
    return container
};