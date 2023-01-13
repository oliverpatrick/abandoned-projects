namespace Player
{
  public abstract class PlayerBaseState
  {
    protected PlayerStateMachine _ctx;
    protected PlayerStateFactory _factory;

    public State(PlayerStateMachine currrentContext, PlayerStateFactory playerStateFactory)
    {
      _ctx = currrentContext;
      _factory = playerStateFactory;
    }

    public abstract void EnterState();
    public abstract void UpdateState();
    public abstract void ExitState();
    public abstract void CheckSwitchStates();
    public abstract void InitialiseSubState();


    void UpdateStates() { }
    void SwitchState(PlayerBaseState newState)
    {
      ExitState();

      newState.EnterState();
    }
    void SetSuperState() { }
    void SetSubState() { }
  }
}