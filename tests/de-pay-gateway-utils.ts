import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ClaimFundTransfered,
  ClaimTokenTransfered,
  FundAddedToEscrow,
  FundTransfered,
  RefundFundTransfered,
  RefundTokenTransfered,
  TokenAddedToEscrow,
  TokenTransfered
} from "../generated/DePayGateway/DePayGateway"

export function createClaimFundTransferedEvent(
  itemId: BigInt,
  senderId: BigInt,
  destinationAddress: Address,
  amount: BigInt
): ClaimFundTransfered {
  let claimFundTransferedEvent = changetype<ClaimFundTransfered>(newMockEvent())

  claimFundTransferedEvent.parameters = new Array()

  claimFundTransferedEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  claimFundTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "senderId",
      ethereum.Value.fromUnsignedBigInt(senderId)
    )
  )
  claimFundTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "destinationAddress",
      ethereum.Value.fromAddress(destinationAddress)
    )
  )
  claimFundTransferedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimFundTransferedEvent
}

export function createClaimTokenTransferedEvent(
  itemId: BigInt,
  senderId: BigInt,
  destinationAddress: Address,
  tokenAddress: Address,
  amount: BigInt
): ClaimTokenTransfered {
  let claimTokenTransferedEvent = changetype<ClaimTokenTransfered>(
    newMockEvent()
  )

  claimTokenTransferedEvent.parameters = new Array()

  claimTokenTransferedEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  claimTokenTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "senderId",
      ethereum.Value.fromUnsignedBigInt(senderId)
    )
  )
  claimTokenTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "destinationAddress",
      ethereum.Value.fromAddress(destinationAddress)
    )
  )
  claimTokenTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  claimTokenTransferedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimTokenTransferedEvent
}

export function createFundAddedToEscrowEvent(
  itemId: BigInt,
  senderId: BigInt,
  destinationId: BigInt,
  amount: BigInt,
  expiresOn: BigInt
): FundAddedToEscrow {
  let fundAddedToEscrowEvent = changetype<FundAddedToEscrow>(newMockEvent())

  fundAddedToEscrowEvent.parameters = new Array()

  fundAddedToEscrowEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  fundAddedToEscrowEvent.parameters.push(
    new ethereum.EventParam(
      "senderId",
      ethereum.Value.fromUnsignedBigInt(senderId)
    )
  )
  fundAddedToEscrowEvent.parameters.push(
    new ethereum.EventParam(
      "destinationId",
      ethereum.Value.fromUnsignedBigInt(destinationId)
    )
  )
  fundAddedToEscrowEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundAddedToEscrowEvent.parameters.push(
    new ethereum.EventParam(
      "expiresOn",
      ethereum.Value.fromUnsignedBigInt(expiresOn)
    )
  )

  return fundAddedToEscrowEvent
}

export function createFundTransferedEvent(
  senderAddress: Address,
  destinationAddress: Address,
  amount: BigInt
): FundTransfered {
  let fundTransferedEvent = changetype<FundTransfered>(newMockEvent())

  fundTransferedEvent.parameters = new Array()

  fundTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "senderAddress",
      ethereum.Value.fromAddress(senderAddress)
    )
  )
  fundTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "destinationAddress",
      ethereum.Value.fromAddress(destinationAddress)
    )
  )
  fundTransferedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundTransferedEvent
}

export function createRefundFundTransferedEvent(
  itemId: BigInt,
  senderAddress: Address,
  destinationId: BigInt,
  amount: BigInt
): RefundFundTransfered {
  let refundFundTransferedEvent = changetype<RefundFundTransfered>(
    newMockEvent()
  )

  refundFundTransferedEvent.parameters = new Array()

  refundFundTransferedEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  refundFundTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "senderAddress",
      ethereum.Value.fromAddress(senderAddress)
    )
  )
  refundFundTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "destinationId",
      ethereum.Value.fromUnsignedBigInt(destinationId)
    )
  )
  refundFundTransferedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return refundFundTransferedEvent
}

export function createRefundTokenTransferedEvent(
  itemId: BigInt,
  senderAddress: Address,
  destinationId: BigInt,
  tokenAddress: Address,
  amount: BigInt
): RefundTokenTransfered {
  let refundTokenTransferedEvent = changetype<RefundTokenTransfered>(
    newMockEvent()
  )

  refundTokenTransferedEvent.parameters = new Array()

  refundTokenTransferedEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  refundTokenTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "senderAddress",
      ethereum.Value.fromAddress(senderAddress)
    )
  )
  refundTokenTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "destinationId",
      ethereum.Value.fromUnsignedBigInt(destinationId)
    )
  )
  refundTokenTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  refundTokenTransferedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return refundTokenTransferedEvent
}

export function createTokenAddedToEscrowEvent(
  itemId: BigInt,
  senderId: BigInt,
  destinationId: BigInt,
  tokenAddress: Address,
  amount: BigInt,
  expiresOn: BigInt
): TokenAddedToEscrow {
  let tokenAddedToEscrowEvent = changetype<TokenAddedToEscrow>(newMockEvent())

  tokenAddedToEscrowEvent.parameters = new Array()

  tokenAddedToEscrowEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  tokenAddedToEscrowEvent.parameters.push(
    new ethereum.EventParam(
      "senderId",
      ethereum.Value.fromUnsignedBigInt(senderId)
    )
  )
  tokenAddedToEscrowEvent.parameters.push(
    new ethereum.EventParam(
      "destinationId",
      ethereum.Value.fromUnsignedBigInt(destinationId)
    )
  )
  tokenAddedToEscrowEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  tokenAddedToEscrowEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokenAddedToEscrowEvent.parameters.push(
    new ethereum.EventParam(
      "expiresOn",
      ethereum.Value.fromUnsignedBigInt(expiresOn)
    )
  )

  return tokenAddedToEscrowEvent
}

export function createTokenTransferedEvent(
  senderAddress: Address,
  destinationAddress: Address,
  tokenAddress: Address,
  amount: BigInt
): TokenTransfered {
  let tokenTransferedEvent = changetype<TokenTransfered>(newMockEvent())

  tokenTransferedEvent.parameters = new Array()

  tokenTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "senderAddress",
      ethereum.Value.fromAddress(senderAddress)
    )
  )
  tokenTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "destinationAddress",
      ethereum.Value.fromAddress(destinationAddress)
    )
  )
  tokenTransferedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  tokenTransferedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokenTransferedEvent
}
