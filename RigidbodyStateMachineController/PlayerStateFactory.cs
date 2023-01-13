namespace Player
{
  public class PlayerStateFactory
  {
    PlayerStateMachine _context;

    public PlayerStateFactory(PlayerStateMachine currentContext)
    {
      _context = currentContext;
    }

    public PlayerBaseState Idle()
    {
      return new PlayerIdleState(_context);
    }
    public PlayerBaseState Walk()
    {
      return new PlayerWalkState(_context);
    }
    public PlayerBaseState Sprint()
    {
      return new PlayerSprintState(_context);
    }
    public PlayerJumpState Jump()
    {
      return new PlayerJumpState(_context);
    }
    public PlayerGroundedState Grounded()
    {
      return new PlayerGroundedState(_context);
    }
    public PlayerCrouchState Crouch()
    {
      return new PlayerCrouchState(_context);
    }
    // public PlayerBaseState Idle()
    // {
    //   return new PlayerIdleState();
    // }

  }
}