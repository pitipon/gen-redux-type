# Gen Redux Type
Auto generate actionTypes and actionFunction.

### Credit
We got inspire from [myReduxType npm](https://www.npmjs.com/package/myreduxtypes)

### Params (Object)
* **name**: (String)
    * service name such as 'product', 'user' and 'etc'.
* **verbs**: (Array)
    * verb of action such as 'CREATE', 'PATCH', 'REMOVE', 'GET', 'FIND'
* **events**: (Array)
    * event of action
        * Input event: 'START'
        * Output event: 'SUCCESS', 'FAILED'
* **extras**: (Array)
    * Addtional action type such as 'LOADING', 'CURRENT', 'THEME', 'DISABLED', 'HIDE'

##### Optional
* **addDefaultVerbs**: (Boolean, default: false)
    * It will add verbs default when you assign custom verbs
* **addDefaultEvents**: (Boolean, default: false)
    * It will add events default when you assign custom events
* **addDefaultExtras**: (Boolean, default: false)
    * It will add extras default when you assign custom extra type
* **setDefaultVerbs**: (Array)
    * Assign new defaults for verbs
* **setDefaultEvents**: (Array)
    * Assign new defaults for events
* **setDefaultExtras**: (Array)
    * Assign new defaults for extras



### Default
* verbs: ['CREATE', 'PATCH', 'REMOVE', 'GET', 'FIND']
* events: ['START', 'SUCCESS', 'FAILED']
* extras: ['LOADING', 'CURRENT', 'THEME', 'DISABLE', 'HIDE']

### Types
There are 2 types here
* **Main types**
    * Object Format is  `<verb>_<event>: <name>_<verb>_<event>`
    * **name** is reducer name
    * **verb** is action to do thing such as CRUD
    * **event** is status of type
        * Input = 'START'
        * Output = 'SUCCESS', 'FAILED'
* **Extra types**
    * We might need extra type for control UI or use in saga
    * Object format is `<extra>: <name>_<extra>`
    * **name** is reducer name
    * **extra** is extra action for UI or others
### Actions
* Action function will use the same name as type
* Function accept two arguments (payload and route)


```
actions.create_start(data,'/')

// //// output ////
//  { type: 'CREATE_PRODUCT_START', payload: data, route: '/' }
```

* Return as
    * type
    * payload
    * route (optional usage) - it help when we want to use saga to trigger next route

#### Example
```js
import genReduxType from 'gen-redux-type'
const [types, actions] = genReduxType({ name: 'Product' })

console.log(
  actions.create_start()
)
// {type: 'CREATE_PRODUCT_START', payload: undefined, route: undefined}

console.log(
  actions.create_start(
    { name: 'milk', price: '12' }
  )
)
// {type: 'CREATE_PRODUCT_START', payload: {…}, route: undefined}
console.log(
  actions.create_start(
    { name: 'milk', price: '12' },
    '/'
  )
)
// {type: 'CREATE_PRODUCT_START', payload: {…}, route: '/'}
```

## Usage

### install
```
npm i gen-redux-type --save
```

### normal usage
```js
import genReduxType from 'gen-redux-type'
const [productTypes, productActions] = genReduxType({ name: 'product' })
```

Return types
```js
{
    CREATE_FAILED: "CREATE_PRODUCT_FAILED"
    CREATE_START: "CREATE_PRODUCT_START"
    CREATE_SUCCESS: "CREATE_PRODUCT_SUCCESS"
    CURRENT: "PRODUCT_CURRENT"
    DISABLE: "PRODUCT_DISABLE"
    FIND_FAILED: "FIND_PRODUCT_FAILED"
    FIND_START: "FIND_PRODUCT_START"
    FIND_SUCCESS: "FIND_PRODUCT_SUCCESS"
    GET_FAILED: "GET_PRODUCT_FAILED"
    GET_START: "GET_PRODUCT_START"
    GET_SUCCESS: "GET_PRODUCT_SUCCESS"
    HIDE: "PRODUCT_HIDE"
    LOADING: "PRODUCT_LOADING"
    PATCH_FAILED: "PATCH_PRODUCT_FAILED"
    PATCH_START: "PATCH_PRODUCT_START"
    PATCH_SUCCESS: "PATCH_PRODUCT_SUCCESS"
    REMOVE_FAILED: "REMOVE_PRODUCT_FAILED"
    REMOVE_START: "REMOVE_PRODUCT_START"
    REMOVE_SUCCESS: "REMOVE_PRODUCT_SUCCESS"
    THEME: "PRODUCT_THEME"
}
```

Return actions
```js
{
    create_failed: ƒ (data, route)
    create_start: ƒ (data, route)
    create_success: ƒ (data, route)
    current: ƒ (data, route)
    disable: ƒ (data, route)
    find_failed: ƒ (data, route)
    find_start: ƒ (data, route)
    find_success: ƒ (data, route)
    get_failed: ƒ (data, route)
    get_start: ƒ (data, route)
    get_success: ƒ (data, route)
    hide: ƒ (data, route)
    loading: ƒ (data, route)
    patch_failed: ƒ (data, route)
    patch_start: ƒ (data, route)
    patch_success: ƒ (data, route)
    remove_failed: ƒ (data, route)
    remove_start: ƒ (data, route)
    remove_success: ƒ (data, route)
    theme: ƒ (data, route)
}
```


### Authen example
```js
import genReduxType from 'gen-redux-type'
const [authTypes, authActions] = genReduxType({
    name: 'user',
    verbs: ['login', 'register']
})
```
Return authTypes
```js
{
    CURRENT: "USER_CURRENT"
    DISABLE: "USER_DISABLE"
    HIDE: "USER_HIDE"
    LOADING: "USER_LOADING"
    LOGIN_FAILED: "LOGIN_USER_FAILED"
    LOGIN_START: "LOGIN_USER_START"
    LOGIN_SUCCESS: "LOGIN_USER_SUCCESS"
    REGISTER_FAILED: "REGISTER_USER_FAILED"
    REGISTER_START: "REGISTER_USER_START"
    REGISTER_SUCCESS: "REGISTER_USER_SUCCESS"
    THEME: "USER_THEME"
}
```
Return authActions
```js
{
    current: ƒ (data, route)
    disable: ƒ (data, route)
    hide: ƒ (data, route)
    loading: ƒ (data, route)
    login_failed: ƒ (data, route)
    login_start: ƒ (data, route)
    login_success: ƒ (data, route)
    register_failed: ƒ (data, route)
    register_start: ƒ (data, route)
    register_success: ƒ (data, route)
    theme: ƒ (data, route)
}
```

### Modal example
```js
import genReduxType from 'gen-redux-type'
const [modalTypes, modalActions] = genReduxType({
    name: 'modal',
    verbs: [],
    events: [],
    extras: ['open','close','toggle']
})
```
Return modalTypes
```js
{
    CLOSE: "MODAL_CLOSE"
    OPEN: "MODAL_OPEN"
    TOGGLE: "MODAL_TOGGLE"
}
```
Return modalActions
```js
{
    close: ƒ (data, route)
    open: ƒ (data, route)
    toggle: ƒ (data, route)
}
```

### User CRUD only exmaple
```js
import genReduxType from 'gen-redux-type'
const [userTypes, userActions] = genReduxType({
    name: 'user',
    extras: []
})
```
Return userTypes
```js
{
    CREATE_FAILED: "CREATE_USER_FAILED"
    CREATE_START: "CREATE_USER_START"
    CREATE_SUCCESS: "CREATE_USER_SUCCESS"
    FIND_FAILED: "FIND_USER_FAILED"
    FIND_START: "FIND_USER_START"
    FIND_SUCCESS: "FIND_USER_SUCCESS"
    GET_FAILED: "GET_USER_FAILED"
    GET_START: "GET_USER_START"
    GET_SUCCESS: "GET_USER_SUCCESS"
    PATCH_FAILED: "PATCH_USER_FAILED"
    PATCH_START: "PATCH_USER_START"
    PATCH_SUCCESS: "PATCH_USER_SUCCESS"
    REMOVE_FAILED: "REMOVE_USER_FAILED"
    REMOVE_START: "REMOVE_USER_START"
    REMOVE_SUCCESS: "REMOVE_USER_SUCCESS"
}
```
Return userActions
```js
{
    create_failed: ƒ (data, route)
    create_start: ƒ (data, route)
    create_success: ƒ (data, route)
    find_failed: ƒ (data, route)
    find_start: ƒ (data, route)
    find_success: ƒ (data, route)
    get_failed: ƒ (data, route)
    get_start: ƒ (data, route)
    get_success: ƒ (data, route)
    patch_failed: ƒ (data, route)
    patch_start: ƒ (data, route)
    patch_success: ƒ (data, route)
    remove_failed: ƒ (data, route)
    remove_start: ƒ (data, route)
    remove_success: ƒ (data, route)
}
```