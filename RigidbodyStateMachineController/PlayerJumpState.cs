
namespace Player
{
  public class PlayerJumpState : PlayerBaseState
  {
    public PlayerJumpState(PlayerStateMachine currentContext, PlayerStateFactory playerStateFactory)
      : base(currentContext, playerStateFactory) { }

    public override void Enter()
    {
      // Set isGrounded to true
    }

    public override void Exit()
    {
      // Set isGrounded to false
    }

    public override void Update()
    {
      // Handle movement and crouching
    }
  }
}
