declare namespace Chain {
  interface Coin {
    denom: string;
    amount: bigint;
  }
  interface DecCoin {
    denom: string;
    amount: bigint;
    precision: bigint;
  }

  interface Description {
    // moniker defines a human-readable name for the validator.
    moniker: string;
    // identity defines an optional identity signature (ex. UPort or Keybase).
    identity: string;
    // website defines an optional website link.
    website: string;
    // securityContact defines an optional email for security contact.
    securityContact: string;
    // details define other optional details.
    details: string;
  }

  interface CommissionRates {
    // rate defines the maximum commission rate which validator can ever charge, as a fraction.
    rate: bigint;
    // maxRate defines the maximum commission rate which validator can ever charge, as a fraction.
    maxRate: bigint;
    // maxChangeRate defines the maximum daily increase of the validator commission, as a fraction.
    maxChangeRate: bigint;
  }
  interface Commission {
    // commissionRates defines the initial commission rates to be used for creating a validator
    commissionRates: CommissionRates;
    // updateTime defines the validator update commissionRates time
    updateTime: bigint;
  }

  enum BondStatus {
    // Unspecified defines an invalid validator status.
    Unspecified = 0,
    // Unbonded defines a validator that is not bonded.
    Unbonded,
    // Unbonding defines a validator that is unbonding.
    Unbonding,
    // Bonded defines a validator that is bonded.
    Bonded
  }

  interface Validator {
    // operatorAddress defines the address of the validator's operator
    operatorAddress: string;
    // consensusPubkey is the consensus public key of the validator
    consensusPubkey: string;
    // jailed defined whether the validator has been jailed from bonded status or not.
    jailed: boolean;
    // status is the validator status (bonded/unbonding/unbonded).
    status: BondStatus;
    // tokens define the delegated tokens (incl. self-delegation).
    tokens: bigint;
    // delegatorShares defines total shares issued to a validator's delegators.
    delegatorShares: bigint;
    // description defines the description terms for the validator.
    description: Description;
    // unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
    unbondingHeight: bigint;
    // unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
    unbondingTime: bigint;
    // commission defines the commission parameters.
    commission: Commission;
    // minSelfDelegation is the validator's self declared minimum self delegation.
    minSelfDelegation: bigint;
  }

  interface PageResponse {
    // nextKey is the key to be passed to PageRequest.key to
    // query the next page most efficiently. It will be empty if
    // there are no more results.
    nextKey: string;

    // total is total number of results available if PageRequest.count_total
    // was set, its value is undefined otherwise
    total: bigint;
  }
}
