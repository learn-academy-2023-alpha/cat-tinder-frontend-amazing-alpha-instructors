# Cat Tinder Frontend
- Setup can be found in the syllabus
- Create assets, components, and pages folder


# Cat Tinder Testing
- Using Jest and React Testing Library

## Types of testing:
- Static: Peer reviews, inspecting pages, looking for syntax mistakes
- Unit: Looks at a portion of the code and verifies the expected result
- Integration: Tests how our code is working together in our application
- End-to-end: Automates the user going through the whole application

## Test Setup
- Jest: Javascript testing framework
- React Testing Library: Provides methods to write test scripts

To run test suite:
`$ yarn test`

Imports:
- Render: allows me to call upon the component
- Screen: allows me to see the whole node tree that a user will get


Arrange: What do I need to setup the environment when I am testing.

Act: Getting the method needed to pull the information

Assert: Expecting a specific output based on arrange and act.

## React Testing Library Methods
- getByText(): find an element by it's text value
- getByRole(): find an element by it's attributes

## Debugging Tools
- screen.debug(): shows in your terminal all the nodes on the page rendering
- screen.logTestingPlaygroundURL(): gives us a url that allows us to interact and find queries for our test


# Read Functionality
RESTful Routes
  - Index - Read
  - Show - Read
  - New
  - Create
  - Edit
  - Update
  - Destroy

API RESTful Routes:
- Index
- Create
- Update
- Destroy

User side:
- Show
- Edit
- New - form

## Conditional Rendering
Using the && sign:
```javascript
    {selectedCat && (
            <Card
            style={{
              width: '100%'
            }}
          >
            <img
              alt={selectedCat.name}
              src={selectedCat.image}
            />
            <CardBody>
              <CardTitle tag="h5">
                {selectedCat.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Age: {selectedCat.age}
              </CardSubtitle>
              <CardText>
                Enjoys {selectedCat.enjoys}
              </CardText>
            </CardBody>
          </Card>
      )}
```
selectedCat === true render
else don't render yet