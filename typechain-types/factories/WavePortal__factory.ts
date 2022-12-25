/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WavePortal, WavePortalInterface } from "../WavePortal";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061003c60405180606001604052806025815260200161037d6025913961004160201b6100091760201c565b6101bb565b6100dd816040516024016100559190610199565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506100e060201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610143578082015181840152602081019050610128565b60008484015250505050565b6000601f19601f8301169050919050565b600061016b82610109565b6101758185610114565b9350610185818560208601610125565b61018e8161014f565b840191505092915050565b600060208201905081810360008301526101b38184610160565b905092915050565b6101b3806101ca6000396000f3fe6080604052600080fd5b61009f8160405160240161001d919061015b565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506100a2565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156101055780820151818401526020810190506100ea565b60008484015250505050565b6000601f19601f8301169050919050565b600061012d826100cb565b61013781856100d6565b93506101478185602086016100e7565b61015081610111565b840191505092915050565b600060208201905081810360008301526101758184610122565b90509291505056fea26469706673582212206d09adc2723a7d5cbd8991abbc030c27ddaa30b3ad264db435dd14e4cd3f462c64736f6c63430008110033596f20796f2c204920616d206120636f6e747261637420616e64204920616d20736d617274";

type WavePortalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WavePortalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WavePortal__factory extends ContractFactory {
  constructor(...args: WavePortalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WavePortal> {
    return super.deploy(overrides || {}) as Promise<WavePortal>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WavePortal {
    return super.attach(address) as WavePortal;
  }
  override connect(signer: Signer): WavePortal__factory {
    return super.connect(signer) as WavePortal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WavePortalInterface {
    return new utils.Interface(_abi) as WavePortalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WavePortal {
    return new Contract(address, _abi, signerOrProvider) as WavePortal;
  }
}
