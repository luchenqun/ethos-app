export const bank = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'fromAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'toAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'amount',
        type: 'string'
      }
    ],
    name: 'Send',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'accountAddress',
        type: 'address'
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'key',
            type: 'bytes'
          },
          {
            internalType: 'uint64',
            name: 'offset',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'limit',
            type: 'uint64'
          },
          {
            internalType: 'bool',
            name: 'countTotal',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'reverse',
            type: 'bool'
          }
        ],
        internalType: 'struct PageRequest',
        name: 'pageRequest',
        type: 'tuple'
      }
    ],
    name: 'allBalances',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        internalType: 'struct Coin[]',
        name: 'balances',
        type: 'tuple[]'
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'nextKey',
            type: 'bytes'
          },
          {
            internalType: 'uint64',
            name: 'total',
            type: 'uint64'
          }
        ],
        internalType: 'struct PageResponse',
        name: 'pageResponse',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'accountAddress',
        type: 'address'
      },
      {
        internalType: 'string',
        name: 'denom',
        type: 'string'
      }
    ],
    name: 'balance',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        internalType: 'struct Coin',
        name: 'balance',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'toAddress',
        type: 'address'
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        internalType: 'struct Coin[]',
        name: 'amount',
        type: 'tuple[]'
      }
    ],
    name: 'send',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        internalType: 'struct Coin[]',
        name: 'supply',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
];
export const staking = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegatorAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'creationHeight',
        type: 'uint256'
      }
    ],
    name: 'CancelUnbondingDelegation',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'validator',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'CreateValidator',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegator',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'validator',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'Delegate',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'validator',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'commissionRate',
        type: 'int256'
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'minSelfDelegation',
        type: 'int256'
      }
    ],
    name: 'EditValidator',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegatorAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'validatorSrcAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'validatorDstAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'completionTime',
        type: 'uint256'
      }
    ],
    name: 'Redelegate',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegatorAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'completionTime',
        type: 'uint256'
      }
    ],
    name: 'Undelegate',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'creationHeight',
        type: 'uint256'
      }
    ],
    name: 'cancelUnbondingDelegation',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'moniker',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'identity',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'website',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'securityContact',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'details',
            type: 'string'
          }
        ],
        internalType: 'struct Description',
        name: 'description',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'rate',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'maxRate',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'maxChangeRate',
            type: 'uint256'
          }
        ],
        internalType: 'struct CommissionRates',
        name: 'commission',
        type: 'tuple'
      },
      {
        internalType: 'uint256',
        name: 'minSelfDelegation',
        type: 'uint256'
      },
      {
        internalType: 'string',
        name: 'pubkey',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'createValidator',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'delegate',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatorAddr',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'validatorAddr',
        type: 'address'
      }
    ],
    name: 'delegation',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'delegatorAddress',
                type: 'address'
              },
              {
                internalType: 'address',
                name: 'validatorAddress',
                type: 'address'
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint8',
                    name: 'precision',
                    type: 'uint8'
                  }
                ],
                internalType: 'struct Dec',
                name: 'shares',
                type: 'tuple'
              }
            ],
            internalType: 'struct Delegation',
            name: 'delegation',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'denom',
                type: 'string'
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            internalType: 'struct Coin',
            name: 'balance',
            type: 'tuple'
          }
        ],
        internalType: 'struct DelegationResponse',
        name: 'response',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatorAddr',
        type: 'address'
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'key',
            type: 'bytes'
          },
          {
            internalType: 'uint64',
            name: 'offset',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'limit',
            type: 'uint64'
          },
          {
            internalType: 'bool',
            name: 'countTotal',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'reverse',
            type: 'bool'
          }
        ],
        internalType: 'struct PageRequest',
        name: 'pagination',
        type: 'tuple'
      }
    ],
    name: 'delegatorDelegations',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'delegatorAddress',
                type: 'address'
              },
              {
                internalType: 'address',
                name: 'validatorAddress',
                type: 'address'
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint8',
                    name: 'precision',
                    type: 'uint8'
                  }
                ],
                internalType: 'struct Dec',
                name: 'shares',
                type: 'tuple'
              }
            ],
            internalType: 'struct Delegation',
            name: 'delegation',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'denom',
                type: 'string'
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            internalType: 'struct Coin',
            name: 'balance',
            type: 'tuple'
          }
        ],
        internalType: 'struct DelegationResponse[]',
        name: 'response',
        type: 'tuple[]'
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'nextKey',
            type: 'bytes'
          },
          {
            internalType: 'uint64',
            name: 'total',
            type: 'uint64'
          }
        ],
        internalType: 'struct PageResponse',
        name: 'pageResponse',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatorAddr',
        type: 'address'
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'key',
            type: 'bytes'
          },
          {
            internalType: 'uint64',
            name: 'offset',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'limit',
            type: 'uint64'
          },
          {
            internalType: 'bool',
            name: 'countTotal',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'reverse',
            type: 'bool'
          }
        ],
        internalType: 'struct PageRequest',
        name: 'pagination',
        type: 'tuple'
      }
    ],
    name: 'delegatorUnbondingDelegations',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'delegatorAddress',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'validatorAddress',
            type: 'address'
          },
          {
            components: [
              {
                internalType: 'int64',
                name: 'creationHeight',
                type: 'int64'
              },
              {
                internalType: 'int64',
                name: 'completionTime',
                type: 'int64'
              },
              {
                internalType: 'uint256',
                name: 'initialBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'balance',
                type: 'uint256'
              }
            ],
            internalType: 'struct UnbondingDelegationEntry[]',
            name: 'entries',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct UnbondingDelegation[]',
        name: 'response',
        type: 'tuple[]'
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'nextKey',
            type: 'bytes'
          },
          {
            internalType: 'uint64',
            name: 'total',
            type: 'uint64'
          }
        ],
        internalType: 'struct PageResponse',
        name: 'pageResponse',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'moniker',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'identity',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'website',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'securityContact',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'details',
            type: 'string'
          }
        ],
        internalType: 'struct Description',
        name: 'description',
        type: 'tuple'
      },
      {
        internalType: 'int256',
        name: 'commissionRate',
        type: 'int256'
      },
      {
        internalType: 'int256',
        name: 'minSelfDelegation',
        type: 'int256'
      }
    ],
    name: 'editValidator',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validatorSrcAddress',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'validatorDstAddress',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'redelegate',
    outputs: [
      {
        internalType: 'uint256',
        name: 'completionTime',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatorAddr',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'validatorAddr',
        type: 'address'
      }
    ],
    name: 'unbondingDelegation',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'delegatorAddress',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'validatorAddress',
            type: 'address'
          },
          {
            components: [
              {
                internalType: 'int64',
                name: 'creationHeight',
                type: 'int64'
              },
              {
                internalType: 'int64',
                name: 'completionTime',
                type: 'int64'
              },
              {
                internalType: 'uint256',
                name: 'initialBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'balance',
                type: 'uint256'
              }
            ],
            internalType: 'struct UnbondingDelegationEntry[]',
            name: 'entries',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct UnbondingDelegation',
        name: 'response',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'undelegate',
    outputs: [
      {
        internalType: 'uint256',
        name: 'completionTime',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validatorAddr',
        type: 'address'
      }
    ],
    name: 'validator',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'operatorAddress',
            type: 'address'
          },
          {
            internalType: 'string',
            name: 'consensusPubkey',
            type: 'string'
          },
          {
            internalType: 'bool',
            name: 'jailed',
            type: 'bool'
          },
          {
            internalType: 'enum BondStatus',
            name: 'status',
            type: 'uint8'
          },
          {
            internalType: 'uint256',
            name: 'tokens',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'delegatorShares',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'moniker',
                type: 'string'
              },
              {
                internalType: 'string',
                name: 'identity',
                type: 'string'
              },
              {
                internalType: 'string',
                name: 'website',
                type: 'string'
              },
              {
                internalType: 'string',
                name: 'securityContact',
                type: 'string'
              },
              {
                internalType: 'string',
                name: 'details',
                type: 'string'
              }
            ],
            internalType: 'struct Description',
            name: 'description',
            type: 'tuple'
          },
          {
            internalType: 'int64',
            name: 'unbondingHeight',
            type: 'int64'
          },
          {
            internalType: 'int64',
            name: 'unbondingTime',
            type: 'int64'
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'rate',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'maxRate',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'maxChangeRate',
                    type: 'uint256'
                  }
                ],
                internalType: 'struct CommissionRates',
                name: 'commissionRates',
                type: 'tuple'
              },
              {
                internalType: 'int64',
                name: 'updateTime',
                type: 'int64'
              }
            ],
            internalType: 'struct Commission',
            name: 'commission',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'minSelfDelegation',
            type: 'uint256'
          }
        ],
        internalType: 'struct Validator',
        name: 'validator',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validatorAddr',
        type: 'address'
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'key',
            type: 'bytes'
          },
          {
            internalType: 'uint64',
            name: 'offset',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'limit',
            type: 'uint64'
          },
          {
            internalType: 'bool',
            name: 'countTotal',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'reverse',
            type: 'bool'
          }
        ],
        internalType: 'struct PageRequest',
        name: 'pagination',
        type: 'tuple'
      }
    ],
    name: 'validatorDelegations',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'delegatorAddress',
                type: 'address'
              },
              {
                internalType: 'address',
                name: 'validatorAddress',
                type: 'address'
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint8',
                    name: 'precision',
                    type: 'uint8'
                  }
                ],
                internalType: 'struct Dec',
                name: 'shares',
                type: 'tuple'
              }
            ],
            internalType: 'struct Delegation',
            name: 'delegation',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'denom',
                type: 'string'
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            internalType: 'struct Coin',
            name: 'balance',
            type: 'tuple'
          }
        ],
        internalType: 'struct DelegationResponse[]',
        name: 'response',
        type: 'tuple[]'
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'nextKey',
            type: 'bytes'
          },
          {
            internalType: 'uint64',
            name: 'total',
            type: 'uint64'
          }
        ],
        internalType: 'struct PageResponse',
        name: 'pageResponse',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validatorAddr',
        type: 'address'
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'key',
            type: 'bytes'
          },
          {
            internalType: 'uint64',
            name: 'offset',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'limit',
            type: 'uint64'
          },
          {
            internalType: 'bool',
            name: 'countTotal',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'reverse',
            type: 'bool'
          }
        ],
        internalType: 'struct PageRequest',
        name: 'pagination',
        type: 'tuple'
      }
    ],
    name: 'validatorUnbondingDelegations',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'delegatorAddress',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'validatorAddress',
            type: 'address'
          },
          {
            components: [
              {
                internalType: 'int64',
                name: 'creationHeight',
                type: 'int64'
              },
              {
                internalType: 'int64',
                name: 'completionTime',
                type: 'int64'
              },
              {
                internalType: 'uint256',
                name: 'initialBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'balance',
                type: 'uint256'
              }
            ],
            internalType: 'struct UnbondingDelegationEntry[]',
            name: 'entries',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct UnbondingDelegation[]',
        name: 'response',
        type: 'tuple[]'
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'nextKey',
            type: 'bytes'
          },
          {
            internalType: 'uint64',
            name: 'total',
            type: 'uint64'
          }
        ],
        internalType: 'struct PageResponse',
        name: 'pageResponse',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'enum BondStatus',
        name: 'status',
        type: 'uint8'
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'key',
            type: 'bytes'
          },
          {
            internalType: 'uint64',
            name: 'offset',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'limit',
            type: 'uint64'
          },
          {
            internalType: 'bool',
            name: 'countTotal',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'reverse',
            type: 'bool'
          }
        ],
        internalType: 'struct PageRequest',
        name: 'pagination',
        type: 'tuple'
      }
    ],
    name: 'validators',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'operatorAddress',
            type: 'address'
          },
          {
            internalType: 'string',
            name: 'consensusPubkey',
            type: 'string'
          },
          {
            internalType: 'bool',
            name: 'jailed',
            type: 'bool'
          },
          {
            internalType: 'enum BondStatus',
            name: 'status',
            type: 'uint8'
          },
          {
            internalType: 'uint256',
            name: 'tokens',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'delegatorShares',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'moniker',
                type: 'string'
              },
              {
                internalType: 'string',
                name: 'identity',
                type: 'string'
              },
              {
                internalType: 'string',
                name: 'website',
                type: 'string'
              },
              {
                internalType: 'string',
                name: 'securityContact',
                type: 'string'
              },
              {
                internalType: 'string',
                name: 'details',
                type: 'string'
              }
            ],
            internalType: 'struct Description',
            name: 'description',
            type: 'tuple'
          },
          {
            internalType: 'int64',
            name: 'unbondingHeight',
            type: 'int64'
          },
          {
            internalType: 'int64',
            name: 'unbondingTime',
            type: 'int64'
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'rate',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'maxRate',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'maxChangeRate',
                    type: 'uint256'
                  }
                ],
                internalType: 'struct CommissionRates',
                name: 'commissionRates',
                type: 'tuple'
              },
              {
                internalType: 'int64',
                name: 'updateTime',
                type: 'int64'
              }
            ],
            internalType: 'struct Commission',
            name: 'commission',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'minSelfDelegation',
            type: 'uint256'
          }
        ],
        internalType: 'struct Validator[]',
        name: 'validators',
        type: 'tuple[]'
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'nextKey',
            type: 'bytes'
          },
          {
            internalType: 'uint64',
            name: 'total',
            type: 'uint64'
          }
        ],
        internalType: 'struct PageResponse',
        name: 'pageResponse',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
];
export const distribution = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'depositor',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'amount',
        type: 'string'
      }
    ],
    name: 'FundCommunityPool',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegatorAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'withdrawAddress',
        type: 'address'
      }
    ],
    name: 'SetWithdrawAddress',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegatorAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'withdrawAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'amount',
        type: 'string'
      }
    ],
    name: 'WithdrawDelegatorReward',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'amount',
        type: 'string'
      }
    ],
    name: 'WithdrawValidatorCommission',
    type: 'event'
  },
  {
    inputs: [],
    name: 'communityPool',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          },
          {
            internalType: 'uint8',
            name: 'precision',
            type: 'uint8'
          }
        ],
        internalType: 'struct DecCoin[]',
        name: 'pool',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatorAddress',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address'
      }
    ],
    name: 'delegationRewards',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          },
          {
            internalType: 'uint8',
            name: 'precision',
            type: 'uint8'
          }
        ],
        internalType: 'struct DecCoin[]',
        name: 'rewards',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatorAddress',
        type: 'address'
      }
    ],
    name: 'delegationTotalRewards',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'validatorAddress',
            type: 'address'
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'denom',
                type: 'string'
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              },
              {
                internalType: 'uint8',
                name: 'precision',
                type: 'uint8'
              }
            ],
            internalType: 'struct DecCoin[]',
            name: 'rewards',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct DelegationDelegatorReward[]',
        name: 'rewards',
        type: 'tuple[]'
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          },
          {
            internalType: 'uint8',
            name: 'precision',
            type: 'uint8'
          }
        ],
        internalType: 'struct DecCoin[]',
        name: 'total',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        internalType: 'struct Coin[]',
        name: 'amount',
        type: 'tuple[]'
      }
    ],
    name: 'fundCommunityPool',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'withdrawAddress',
        type: 'address'
      }
    ],
    name: 'setWithdrawAddress',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address'
      }
    ],
    name: 'validatorCommission',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          },
          {
            internalType: 'uint8',
            name: 'precision',
            type: 'uint8'
          }
        ],
        internalType: 'struct DecCoin[]',
        name: 'commission',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address'
      }
    ],
    name: 'validatorDistributionInfo',
    outputs: [
      {
        internalType: 'address',
        name: 'operatorAddress',
        type: 'address'
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          },
          {
            internalType: 'uint8',
            name: 'precision',
            type: 'uint8'
          }
        ],
        internalType: 'struct DecCoin[]',
        name: 'selfBondRewards',
        type: 'tuple[]'
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          },
          {
            internalType: 'uint8',
            name: 'precision',
            type: 'uint8'
          }
        ],
        internalType: 'struct DecCoin[]',
        name: 'commission',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address'
      }
    ],
    name: 'validatorOutstandingRewards',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          },
          {
            internalType: 'uint8',
            name: 'precision',
            type: 'uint8'
          }
        ],
        internalType: 'struct DecCoin[]',
        name: 'rewards',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address'
      }
    ],
    name: 'withdrawDelegatorReward',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        internalType: 'struct Coin[]',
        name: 'amount',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'withdrawValidatorCommission',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'denom',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        internalType: 'struct Coin[]',
        name: 'amount',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
];

export const bankAddress = '0x0000000000000000000000000000000000001000';
export const govAddress = '0x0000000000000000000000000000000000001002';
export const stakingAddress = '0x0000000000000000000000000000000000001003';
export const distributionAddress = '0x0000000000000000000000000000000000001004';
export const slashingAddress = '0x0000000000000000000000000000000000001005';
export const bondModuleAddress = '0x4feA76427B8345861e80A3540a8a9D936FD39391';
export const distributionMoudleAddress = '0x93354845030274cD4bf1686Abd60AB28EC52e1a7';
