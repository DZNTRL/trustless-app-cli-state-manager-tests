import "should"
import configureMockStore from "redux-mock-store"
import { User as UserServiceStub } from "../utils/UserServiceStub"
import thunk from "redux-thunk"
import { StateManager } from "pro-web-app-cli-state-manager"
import { UserActionKeys } from "pro-web-common/dist/js/enums/state-manager/UserActionKeys"
import { AppActionKeys } from "pro-web-common/dist/js/enums/state-manager/AppActionKeys"
import { Notifications } from "pro-web-common/dist/js/enums/state-manager/Notifications"
import { ResponseMessages } from "pro-web-core/dist/js/enums/ResponseMessages"
import should from "should"

const mockStore = configureMockStore([thunk])
describe("User Actions Suite: should generate dispatch with property type and payload", function() {
    const svc = new UserServiceStub(null)
    it("generate for checkUsername success found", async () => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            { type: UserActionKeys.CHECK_USERNAME, payload: true }
        ]
        await StateManager.actions.user(svc).checkUsername("TEST")(store.dispatch)
        const actions = store.getActions()
        //@ts-ignore
        should(actions).eql(expectedActions)
    })
    it("generate for checkUsername success not found", async () => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            { type: UserActionKeys.CHECK_USERNAME, payload: false }
        ]
        await StateManager.actions.user(svc).checkUsername("T")(store.dispatch)
        const actions = store.getActions()
        //@ts-ignore
        should(actions).eql(expectedActions)
    })
    it("generate for checkUsername error", async () => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            { type: AppActionKeys.SET_NOTIFICATION, payload: {type: Notifications.danger, message: ResponseMessages.NotFound.toString()} }
        ]
        await StateManager.actions.user(svc).checkUsername(null)(store.dispatch)
        const actions = store.getActions()
        //@ts-ignore
        should(actions).eql(expectedActions)
    })
    it("generate for createUser success created", (done) => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            { type:  AppActionKeys.SET_NOTIFICATION, payload: { type: Notifications.success, message: "User Created" } },
            { type: UserActionKeys.REQUEST_LOGIN, payload: "TEST" }
        ]
        StateManager.actions.user(svc).createUser("TEST", "TEST")(store.dispatch)
        setTimeout(() => {
            const actions = store.getActions()
            should(actions).eql(expectedActions)
            done()
        }, 1000)
    })
    it("generate for createUser success not created", (done) => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            { type:  AppActionKeys.SET_NOTIFICATION, payload: { type: Notifications.danger, message: ResponseMessages.NoRecordsUpdated.toString() } }
        ]
        StateManager.actions.user(svc).createUser("T", "TEST")(store.dispatch)
        setTimeout(() => {
            const actions = store.getActions()
            should(actions).eql(expectedActions)
            done()
        }, 1000)
    })
    it("generate for createUser error not created", (done) => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            { type:  AppActionKeys.SET_NOTIFICATION, payload: { type: Notifications.danger, message: ResponseMessages.NoRecordsUpdated.toString() } }
        ]
        StateManager.actions.user(svc).createUser(null, "TEST")(store.dispatch)
        setTimeout(() => {
            const actions = store.getActions()
            should(actions).eql(expectedActions)
            done()
        }, 1000)
    })
    it("generate for requestLogin success", async() => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            { type: UserActionKeys.REQUEST_LOGIN, payload: "TEST"}
        ]
        var a = await StateManager.actions.user(svc).requestLogin("TEST")(store.dispatch)
        const actions = store.getActions()
        should(actions).eql(expectedActions)
    })
    it("generate for requestLogin fail", async() => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            { type:  AppActionKeys.SET_NOTIFICATION, payload: { type: Notifications.warning, message: ResponseMessages.NotFound.toString() } }
        ]
        var a = await StateManager.actions.user(svc).requestLogin("T")(store.dispatch)
        const actions = store.getActions()
        should(actions).eql(expectedActions)
    })
    it("generate for requestLogin error", async() => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            { type:  AppActionKeys.SET_NOTIFICATION, payload: { type: Notifications.danger, message: ResponseMessages.NotFound.toString() } }
        ]
        var a = await StateManager.actions.user(svc).requestLogin(null)(store.dispatch)
        const actions = store.getActions()
        should(actions).eql(expectedActions)
    })

    it("generate for login success", (done) => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            { type: UserActionKeys.SET_USERNAME, payload: "TEST"},
            { type: AppActionKeys.SET_NOTIFICATION, payload: { type: Notifications.success, message: ResponseMessages.OK.toString()} }
        ]
        StateManager.actions.user(svc).login("TEST", "TEST")(store.dispatch)
        setTimeout(() => {
            const actions = store.getActions()
            should(actions).eql(expectedActions)
            done()    
        }, 1000)
    })
    it("generate for login fail", (done) => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            { type: AppActionKeys.SET_NOTIFICATION, payload: { type: Notifications.warning, message: ResponseMessages.NotFound.toString()} }
        ]
        StateManager.actions.user(svc).login("T", "TEST")(store.dispatch)
        setTimeout(() => {
            const actions = store.getActions()
            should(actions).eql(expectedActions)
            done()    
        }, 1000)
    })
    it("generate for login error", (done) => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            { type: AppActionKeys.SET_NOTIFICATION, payload: { type: Notifications.danger, message: ResponseMessages.NotFound.toString()} }
        ]
        StateManager.actions.user(svc).login(null, "TEST")(store.dispatch)
        setTimeout(() => {
            const actions = store.getActions()
            should(actions).eql(expectedActions)
            done()    
        }, 1000)
    })

})