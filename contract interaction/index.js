import {Contract , RpcProvider } from "starknet";

const provider = new RpcProvider({nodeUrl:"https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_8/FCyLgvgy4q9oa_OScl33IgtjRYHNr1gP"});

const testAddress = '0x02d2a4804f83c34227314dba41d5c2f8a546a500d34e30bb5078fd36b5af2d77';

const testAbi= [
  {
    "type": "impl",
    "name": "IHelloStarknetImpl",
    "interface_name": "hello::hello::IHelloStarknet"
  },
  {
    "type": "enum",
    "name": "core::bool",
    "variants": [
      {
        "name": "False",
        "type": "()"
      },
      {
        "name": "True",
        "type": "()"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::integer::u256",
    "members": [
      {
        "name": "low",
        "type": "core::integer::u128"
      },
      {
        "name": "high",
        "type": "core::integer::u128"
      }
    ]
  },
  {
    "type": "struct",
    "name": "hello::hello::Foo",
    "members": [
      {
        "name": "val",
        "type": "core::felt252"
      }
    ]
  },
  {
    "type": "struct",
    "name": "hello::hello::Bet",
    "members": [
      {
        "name": "name",
        "type": "core::felt252"
      },
      {
        "name": "description",
        "type": "core::felt252"
      },
      {
        "name": "expire_date",
        "type": "core::integer::u64"
      },
      {
        "name": "creation_time",
        "type": "core::integer::u64"
      },
      {
        "name": "creator",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "is_cancelled",
        "type": "core::bool"
      },
      {
        "name": "is_voted",
        "type": "core::bool"
      },
      {
        "name": "bettor",
        "type": "hello::hello::UserData"
      },
      {
        "name": "counter_bettor",
        "type": "hello::hello::UserData"
      },
      {
        "name": "winner",
        "type": "core::bool"
      },
      {
        "name": "pool",
        "type": "core::integer::u256"
      },
      {
        "name": "amount",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "type": "struct",
    "name": "hello::hello::UserData",
    "members": [
      {
        "name": "address",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "is_claimed",
        "type": "core::bool"
      }
    ]
  },
  {
    "type": "enum",
    "name": "hello::hello::MyEnum",
    "variants": [
      {
        "name": "Response",
        "type": "hello::hello::Order"
      },
      {
        "name": "Warning",
        "type": "core::felt252"
      },
      {
        "name": "Error",
        "type": "core::integer::u16"
      }
    ]
  },
  {
    "type": "enum",
    "name": "core::option::Option::<core::integer::u8>",
    "variants": [
      {
        "name": "Some",
        "type": "core::integer::u8"
      },
      {
        "name": "None",
        "type": "()"
      }
    ]
  },
  {
    "type": "struct",
    "name": "hello::hello::Order",
    "members": [
      {
        "name": "p1",
        "type": "core::felt252"
      },
      {
        "name": "p2",
        "type": "core::integer::u16"
      }
    ]
  },
  {
    "type": "enum",
    "name": "core::option::Option::<hello::hello::Order>",
    "variants": [
      {
        "name": "Some",
        "type": "hello::hello::Order"
      },
      {
        "name": "None",
        "type": "()"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::starknet::eth_address::EthAddress",
    "members": [
      {
        "name": "address",
        "type": "core::felt252"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::array::Span::<core::integer::u16>",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<core::integer::u16>"
      }
    ]
  },
  {
    "type": "interface",
    "name": "hello::hello::IHelloStarknet",
    "items": [
      {
        "type": "function",
        "name": "increase_balance",
        "inputs": [
          {
            "name": "amount",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_balance",
        "inputs": [],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_status",
        "inputs": [
          {
            "name": "new_status",
            "type": "core::bool"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_status",
        "inputs": [],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_ca",
        "inputs": [
          {
            "name": "address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_ca",
        "inputs": [],
        "outputs": [
          {
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "increase_balance_u8",
        "inputs": [
          {
            "name": "amount",
            "type": "core::integer::u8"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_balance_u8",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u8"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "test_u16",
        "inputs": [
          {
            "name": "p1",
            "type": "core::integer::u16"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u16"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "test_u32",
        "inputs": [
          {
            "name": "p1",
            "type": "core::integer::u32"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u32"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "test_u64",
        "inputs": [
          {
            "name": "p1",
            "type": "core::integer::u64"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u64"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "test_u128",
        "inputs": [
          {
            "name": "p1",
            "type": "core::integer::u128"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u128"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "test_u256",
        "inputs": [
          {
            "name": "p1",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "echo_array",
        "inputs": [
          {
            "name": "data",
            "type": "core::array::Array::<core::integer::u8>"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::integer::u8>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "echo_array_u256",
        "inputs": [
          {
            "name": "data",
            "type": "core::array::Array::<core::integer::u256>"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::integer::u256>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "echo_array_bool",
        "inputs": [
          {
            "name": "data",
            "type": "core::array::Array::<core::bool>"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::bool>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "echo_un_tuple",
        "inputs": [
          {
            "name": "a",
            "type": "(core::felt252, core::integer::u16)"
          }
        ],
        "outputs": [
          {
            "type": "(core::felt252, core::integer::u16)"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "echo_struct",
        "inputs": [
          {
            "name": "tt",
            "type": "hello::hello::Foo"
          }
        ],
        "outputs": [
          {
            "type": "hello::hello::Foo"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_bet",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_bet",
        "inputs": [
          {
            "name": "test",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "hello::hello::Bet"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_user1",
        "inputs": [
          {
            "name": "user",
            "type": "hello::hello::UserData"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_user1",
        "inputs": [],
        "outputs": [
          {
            "type": "hello::hello::UserData"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_user",
        "inputs": [],
        "outputs": [
          {
            "type": "hello::hello::UserData"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "array2d_ex",
        "inputs": [
          {
            "name": "test",
            "type": "core::array::Array::<core::array::Array::<core::felt252>>"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "array2d_array",
        "inputs": [
          {
            "name": "test",
            "type": "core::array::Array::<core::array::Array::<core::felt252>>"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::array::Array::<core::felt252>>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "array2d_felt",
        "inputs": [
          {
            "name": "test",
            "type": "core::array::Array::<core::array::Array::<core::felt252>>"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "tuple_echo",
        "inputs": [
          {
            "name": "a",
            "type": "(core::array::Array::<core::felt252>, core::array::Array::<core::felt252>)"
          }
        ],
        "outputs": [
          {
            "type": "(core::array::Array::<core::felt252>, core::array::Array::<core::felt252>)"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "array_bool_tuple",
        "inputs": [
          {
            "name": "a",
            "type": "core::array::Array::<core::felt252>"
          },
          {
            "name": "b",
            "type": "core::bool"
          }
        ],
        "outputs": [
          {
            "type": "(core::array::Array::<core::felt252>, core::bool)"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "array2ddd_felt",
        "inputs": [
          {
            "name": "testdd",
            "type": "core::array::Array::<core::array::Array::<core::felt252>>"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "my_enum_output",
        "inputs": [
          {
            "name": "val1",
            "type": "core::integer::u16"
          }
        ],
        "outputs": [
          {
            "type": "hello::hello::MyEnum"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "my_enum_input",
        "inputs": [
          {
            "name": "customEnum",
            "type": "hello::hello::MyEnum"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u16"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "option_u8_output",
        "inputs": [
          {
            "name": "val1",
            "type": "core::integer::u8"
          }
        ],
        "outputs": [
          {
            "type": "core::option::Option::<core::integer::u8>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "option_order_output",
        "inputs": [
          {
            "name": "val1",
            "type": "core::integer::u16"
          }
        ],
        "outputs": [
          {
            "type": "core::option::Option::<hello::hello::Order>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "option_order_input",
        "inputs": [
          {
            "name": "inp",
            "type": "core::option::Option::<hello::hello::Order>"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u16"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "new_types",
        "inputs": [
          {
            "name": "ch",
            "type": "core::starknet::class_hash::ClassHash"
          },
          {
            "name": "eth_addr",
            "type": "core::starknet::eth_address::EthAddress"
          },
          {
            "name": "contr_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "(core::starknet::class_hash::ClassHash, core::starknet::eth_address::EthAddress, core::starknet::contract_address::ContractAddress)"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "new_span",
        "inputs": [
          {
            "name": "my_span",
            "type": "core::array::Span::<core::integer::u16>"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Span::<core::integer::u16>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "array_new_types",
        "inputs": [
          {
            "name": "tup",
            "type": "(core::starknet::contract_address::ContractAddress, core::starknet::eth_address::EthAddress, core::starknet::class_hash::ClassHash)"
          },
          {
            "name": "tupa",
            "type": "(core::array::Array::<core::starknet::contract_address::ContractAddress>, core::array::Array::<core::starknet::eth_address::EthAddress>, core::array::Array::<core::starknet::class_hash::ClassHash>)"
          }
        ],
        "outputs": [
          {
            "type": "(core::array::Array::<core::starknet::contract_address::ContractAddress>, core::array::Array::<core::starknet::eth_address::EthAddress>, core::array::Array::<core::starknet::class_hash::ClassHash>)"
          }
        ],
        "state_mutability": "view"
      }
    ]
  },
  {
    "type": "l1_handler",
    "name": "increase_bal",
    "inputs": [
      {
        "name": "from_address",
        "type": "core::felt252"
      },
      {
        "name": "amount",
        "type": "core::felt252"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "type": "constructor",
    "name": "constructor",
    "inputs": []
  },
  {
    "type": "event",
    "name": "hello::hello::HelloStarknet::Event",
    "kind": "enum",
    "variants": []
  }
];

const myTestContract = new Contract(testAbi, testAddress, provider);

const bal1 = await myTestContract.get_balance();
console.log('Initial balance =', bal1.toString(16)); 
console.log('Initial balance =', bal1.toString(10));
