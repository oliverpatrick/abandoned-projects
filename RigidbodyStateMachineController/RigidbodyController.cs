using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
[ReguireComponent(typeof(CapsuleCollider))]
[RequireComponent(typeof(CharacterStats))]
public class RigidbodyController : MonoBehaviour, IPhysicsCharacter
{
  private PlayerStateMachine _playerStateMachine;
  // [Header("Input Handler")]
  // [SerializeField] private InputHandler _input;

  // [Header("Camera Controller")]
  // [SerializeField] CameraController _cameraController;
  // [SerializeField] private GameObject _cameraRoot;

  private IMovement _movement;
  private Vector3 _movementDirection;
  private Vector3 _lookDirection;

  private Rigidbody _rigidbody = null;
  private CapsuleCollider _capsuleCollider = null;
  private CharacterStats _characterStats = null;

  Vector3 _playerMoveDirection = Vector3.zero;

  private void Start()
  {
    _rigidbody = GetComponent<Rigidbody>();
    _capsuleCollider = GetComponent<CapsuleCollider>();
    _characterStats = GetComponent<CharacterStats>();

    stateMachine = new StateMachine();
    stateMachine.AddState("Air", new AirState(this));
    stateMachine.AddState("Grounded", new GroundedState(this));

  }

  private void Update()
  {
    isGrounded = Physics.Raycast(transform.position, -Vector3.up, capsuleCollider.bounds.extents.y + 0.1f);

    if (isGrounded)
    {
      stateMachine.ChangeState("Grounded");
    }
    else
    {
      stateMachine.ChangeState("Air");
    }
  }

  private void FixedUpdate()
  {
    _playerMoveDirection = _cameraController.PlayerOrientation.forward * _input.MoveInput.y +
      _cameraController.PlayerOrientation.right * _input.MoveInput.x;
    _movement.Move(_playerMoveDirection.normalized);
  }

}
