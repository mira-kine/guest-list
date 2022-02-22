- [x] entry form
- [x] user name in header
- [x] user can type in name and guest entry
- [x] input for name disappear once name entered
- [x]] user have button to change guest name

- if no user = "Guest"

### GuestProvider

- [x] useState [guest, setGuest]
- [x] useGuest hook

### EntryProvider

- [x] useState [entry, setEntry]
- [x] useEntry hook

### Views

- [x] Home - EntryProvider
  - what Components are rendered?: EntryList, GuestInput

### States

- useGuest
- useEntries

### Components

- [x] GuestInput
  - [x] setEntry -> e.target.value
  - [x] setGuest
- [x] EntryList - map through entries
- [x] EntryCard - what you want in each entry
- [x] Header
- [ ] Footer

# Authentication and Authorization

### Routes

- [x] "/" home page
- [ ] "/login" login page, redirected to if no user

### Views

- [x] Authorization page with form
- Form
  - [x] email, password
  - [ ] handleSubmit
    - if email === process.env.REACT_APP_AUTH_EMAIL then setUser, otherwise put error message

### Components

- [ ] PrivateRoute -> props: children ...rest(or routeProps) - [ ] redirects according to location and presence of user
