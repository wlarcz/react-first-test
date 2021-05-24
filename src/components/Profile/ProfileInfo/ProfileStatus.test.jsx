import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('Profile status component', () => {
    test('status from props should be in state', () => {
        const component = create(<ProfileStatus status='Hello man' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('Hello man');
    });

    test('after creation span should be displayed with correct status', () => {
        const component = create(<ProfileStatus status='Hello man' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull;
    });

    test('after creation input should be displayed', () => {
        const component = create(<ProfileStatus status='Hello man' />);
        const root = component.root;
    
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test('after creation span should be contains correct status', () => {
        const component = create(<ProfileStatus status='Hello man' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('Hello man');
    });

    test('input should be displayd in editMode instead of span', () => {
        const component = create(<ProfileStatus status='Hello man' />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('Hello man');
    });
    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='Hello man' updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});