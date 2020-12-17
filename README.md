# iPlato Healthcare Technical Test

## Additional Packages Needed
```
yarn add react-router-dom styled-components semantic-ui-react semantic-ui-css storybook normalize.css axios
```

## Components
- Common
    - Routes
    - Button
    - Link (anchor tag)
    - SelectDropdown
- Layout
    - Header
    - Navigation
    - Footer
- Page
    - BreweriesPage
        - Filters
            - SortByDropdown
        - BreweryItems
            - BreweryItem
                - Title
                - City/State/Country
    - BreweryDetailPage
        - Title
        - Type
        - ContactDetail
            - Address
                - Street
                - City
                - State
                - Country
            - PhoneLink
            - WebsiteLink
            - GoogleMapsLink (possibly embedded)

## Spec
### React Technical Test

- Use Open Brewery API https://www.openbrewerydb.org/documentation/01
-listbreweries 
- Build a table with a list of 100 breweries 
- Make them sortable by: Name Type State 
- When we click on a brewery show a brewery details page 
- Use React with TypeScript or JavaScript 
- Create Unit Tests 
- Build a UI you are happy with 
- Use any library you feel is appropriate 
- Google everything you want, whenever you want
- List Breweries
- List and filter breweries - www.openbrewerydb.org