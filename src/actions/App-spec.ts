import "should"
import configureMockStore from "redux-mock-store"
import { User as UserServiceStub } from "pro-web-common/dist/js/stubs/api-service/UserServiceStub"
import thunk from "redux-thunk"
import { StateManager } from "pro-web-app-cli-state-manager"
import { AppActionKeys } from "pro-web-common/dist/js/enums/state-manager/AppActionKeys"
import { Notifications } from "pro-web-common/dist/js/enums/state-manager/Notifications"
import should from "should"
import { LoadingStates } from "pro-web-common/dist/js/enums/state-manager/LoadingStates"

const mockStore = configureMockStore([thunk])
describe("App Actions Suite: should generate dispatch with property type and payload", function() {
    const svc = new UserServiceStub(null)
    describe("Notification", function() {
        it("generate for sendNotification", () => {
            const store = mockStore(StateManager.states.user)
            const expectedActions = [
                {type: AppActionKeys.SET_NOTIFICATION, payload: {type: Notifications.danger, message: "TEST"}}
            ]
            store.dispatch(StateManager.actions.app.setNotification(Notifications.danger, "TEST"))
            setTimeout(() => {
                const actions = store.getActions()
                should(actions).eql(expectedActions)    
            }, 100)
        })
        it("generate for sendNotification", () => {
            const store = mockStore(StateManager.states.user)
            const expectedActions = [
                {type: AppActionKeys.SET_NOTIFICATION, payload: null}
            ]
            //@ts-ignore
            store.dispatch(StateManager.actions.app.clearNotification(Notifications.danger, "TEST"))
            const actions = store.getActions()
            should(actions).eql(expectedActions)
        })
    
    })
    describe("Looading", function() {
        it("should set state to init", () => {
            const store = mockStore(StateManager.states.user)
            const expectedActions = [
                {type: AppActionKeys.SET_LOADING, payload: LoadingStates.init}
            ]
            //@ts-ignore
            store.dispatch(StateManager.actions.app.setLoading(LoadingStates.init))
            const actions = store.getActions()
            should(actions).eql(expectedActions)
        })
        it("should set state to loading", () => {
            const store = mockStore(StateManager.states.user)
            const expectedActions = [
                {type: AppActionKeys.SET_LOADING, payload: LoadingStates.loading}
            ]
            //@ts-ignore
            store.dispatch(StateManager.actions.app.setLoading(LoadingStates.loading))
            const actions = store.getActions()
            should(actions).eql(expectedActions)
        })
        it("should set state to error", () => {
            const store = mockStore(StateManager.states.user)
            const expectedActions = [
                {type: AppActionKeys.SET_LOADING, payload: LoadingStates.error}
            ]
            //@ts-ignore
            store.dispatch(StateManager.actions.app.setLoading(LoadingStates.error))
            const actions = store.getActions()
            should(actions).eql(expectedActions)
        })
        it("should set state to ready", () => {
            const store = mockStore(StateManager.states.user)
            const expectedActions = [
                {type: AppActionKeys.SET_LOADING, payload: LoadingStates.ready}
            ]
            //@ts-ignore
            store.dispatch(StateManager.actions.app.setLoading(LoadingStates.ready))
            const actions = store.getActions()
            should(actions).eql(expectedActions)
        })

    })

})