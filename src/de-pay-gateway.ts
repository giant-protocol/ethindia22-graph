import { Bytes } from "@graphprotocol/graph-ts"
import {
  ClaimFundTransfered as ClaimFundTransferedEvent,
  ClaimTokenTransfered as ClaimTokenTransferedEvent,
  FundAddedToEscrow as FundAddedToEscrowEvent,
  FundTransfered as FundTransferedEvent,
  RefundFundTransfered as RefundFundTransferedEvent,
  RefundTokenTransfered as RefundTokenTransferedEvent,
  TokenAddedToEscrow as TokenAddedToEscrowEvent,
  TokenTransfered as TokenTransferedEvent
} from "../generated/DePayGateway/DePayGateway"
import {
  ClaimFundTransfered,
  ClaimTokenTransfered,
  FundAddedToEscrow,
  FundTransfered,
  RefundFundTransfered,
  RefundTokenTransfered,
  TokenAddedToEscrow,
  TokenTransfered,
  EscrowTransaction
} from "../generated/schema"

export function handleClaimFundTransfered(
  event: ClaimFundTransferedEvent
): void {
  let entity = new ClaimFundTransfered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.itemId = event.params.itemId
  entity.senderId = event.params.senderId.toHexString()
  entity.destinationAddress = event.params.destinationAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let escrowId = event.params.itemId.toString()
  let escrowTransfer = EscrowTransaction.load(escrowId);

  if (escrowTransfer != null) {
    escrowTransfer.hasClaimed = true
    escrowTransfer.claimBlockTime = event.block.timestamp
    escrowTransfer.claimBlockNumber = event.block.number
    escrowTransfer.save()
  }
}

export function handleClaimTokenTransfered(
  event: ClaimTokenTransferedEvent
): void {
  let entity = new ClaimTokenTransfered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.itemId = event.params.itemId
  entity.senderId = event.params.senderId.toHexString()
  entity.destinationAddress = event.params.destinationAddress
  entity.tokenAddress = event.params.tokenAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let escrowId = event.params.itemId.toString()
  let escrowTransfer = EscrowTransaction.load(escrowId);

  if (escrowTransfer != null) {
    escrowTransfer.hasClaimed = true
    escrowTransfer.claimBlockTime = event.block.timestamp
    escrowTransfer.claimBlockNumber = event.block.number
    escrowTransfer.save()
  }
}

export function handleFundAddedToEscrow(event: FundAddedToEscrowEvent): void {
  let entity = new FundAddedToEscrow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.itemId = event.params.itemId
  entity.senderId = event.params.senderId.toHexString()
  entity.destinationId = event.params.destinationId.toHexString()
  entity.amount = event.params.amount
  entity.expiresOn = event.params.expiresOn

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let escrowId = event.params.itemId.toString()
  let escrowTransfer = EscrowTransaction.load(escrowId);

  if (escrowTransfer == null) {
    escrowTransfer = new EscrowTransaction(escrowId);
    escrowTransfer.hasClaimed = false;
    escrowTransfer.hasRefunded = false;
    escrowTransfer.isToken = false;
    escrowTransfer.senderId = event.params.senderId.toHexString()
    escrowTransfer.userId = event.params.destinationId.toHexString()
    escrowTransfer.amount = event.params.amount
  }

  escrowTransfer.expiresOn = event.params.expiresOn.toI32()
  escrowTransfer.blockNumber = event.block.number
  escrowTransfer.blockTimestamp = event.block.timestamp

  escrowTransfer.save()
}

export function handleFundTransfered(event: FundTransferedEvent): void {
  let entity = new FundTransfered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.senderAddress = event.params.senderAddress
  entity.destinationAddress = event.params.destinationAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRefundFundTransfered(
  event: RefundFundTransferedEvent
): void {
  let entity = new RefundFundTransfered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.itemId = event.params.itemId
  entity.senderAddress = event.params.senderAddress
  entity.destinationId = event.params.destinationId.toHexString()
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let escrowId = event.params.itemId.toString()
  let escrowTransfer = EscrowTransaction.load(escrowId);

  if (escrowTransfer != null) {
    escrowTransfer.hasRefunded = true
    escrowTransfer.refundClaimBlockTime = event.block.timestamp
    escrowTransfer.refundBlockNumber = event.block.number
    escrowTransfer.save()
  }
}

export function handleRefundTokenTransfered(
  event: RefundTokenTransferedEvent
): void {
  let entity = new RefundTokenTransfered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.itemId = event.params.itemId
  entity.senderAddress = event.params.senderAddress
  entity.destinationId = event.params.destinationId.toHexString()
  entity.tokenAddress = event.params.tokenAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let escrowId = event.params.itemId.toString()
  let escrowTransfer = EscrowTransaction.load(escrowId);

  if (escrowTransfer != null) {
    escrowTransfer.hasRefunded = true
    escrowTransfer.refundClaimBlockTime = event.block.timestamp
    escrowTransfer.refundBlockNumber = event.block.number
    escrowTransfer.save()
  }
}

export function handleTokenAddedToEscrow(event: TokenAddedToEscrowEvent): void {
  let entity = new TokenAddedToEscrow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.itemId = event.params.itemId
  entity.senderId = event.params.senderId.toHexString()
  entity.destinationId = event.params.destinationId.toHexString()
  entity.tokenAddress = event.params.tokenAddress
  entity.amount = event.params.amount
  entity.expiresOn = event.params.expiresOn

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let escrowId = event.params.itemId.toString()
  let escrowTransfer = EscrowTransaction.load(escrowId);

  if (escrowTransfer == null) {
    escrowTransfer = new EscrowTransaction(escrowId);
    escrowTransfer.hasClaimed = false;
    escrowTransfer.hasRefunded = false;
    escrowTransfer.isToken = true;
    escrowTransfer.tokenAddress = event.params.tokenAddress;
    escrowTransfer.senderId = event.params.senderId.toHexString()
    escrowTransfer.userId = event.params.destinationId.toHexString()
    escrowTransfer.amount = event.params.amount
  } 
  // else {
  //   escrowTransfer.amount = escrowTransfer.amount.plus(event.params.amount)
  // }

  escrowTransfer.expiresOn = event.params.expiresOn.toI32()
  escrowTransfer.blockNumber = event.block.number
  escrowTransfer.blockTimestamp = event.block.timestamp

  escrowTransfer.save()
}

export function handleTokenTransfered(event: TokenTransferedEvent): void {
  let entity = new TokenTransfered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.senderAddress = event.params.senderAddress
  entity.destinationAddress = event.params.destinationAddress
  entity.tokenAddress = event.params.tokenAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
