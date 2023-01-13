
namespace Player
{
  public class PlayerStateMachine
  {
    private PlayerBaseState currentState;
    private Dictionary<string, State> states;

    public StateMachine()
    {
      states = new Dictionary<string, State>();
    }

    public void AddState(string name, State state)
    {
      states.Add(name, state);
    }

    public void ChangeState(string name)
    {
      if (currentState != null)
      {
        currentState.Exit();
      }

      currentState = states[name];
      currentState.Enter();
    }

    public void Update()
    {
      currentState.Update();
    }
  }
}