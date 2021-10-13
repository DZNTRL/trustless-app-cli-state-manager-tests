import "should"
import configureMockStore from "redux-mock-store"
import { User as UserServiceStub } from "../utils/UserServiceStub"
import thunk from "redux-thunk"
import { StateManager } from "pro-web-app-cli-state-manager"
import { AppActionKeys } from "pro-web-common/dist/js/enums/state-manager/AppActionKeys"
import { Notifications } from "pro-web-common/dist/js/enums/state-manager/Notifications"
import should from "should"

const mockStore = configureMockStore([thunk])
describe("App Actions Suite: should generate dispatch with property type and payload", function() {
    const svc = new UserServiceStub(null)
    it("generate for sendNotification", () => {
        const store = mockStore(StateManager.states.user)
        const expectedActions = [
            {type: AppActionKeys.SET_NOTIFICATION, payload: {type: Notifications.danger, message: "TEST"}}
        ]
        store.dispatch(StateManager.actions.app.setNotification(Notifications.danger, "TEST"))
        const actions = store.getActions()
        should(actions).eql(expectedActions)
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