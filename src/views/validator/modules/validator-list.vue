<script setup lang="tsx">
import { NButton, NPopconfirm } from 'naive-ui';
import type { DataTableColumns } from 'naive-ui';
import { computed } from 'vue';
import { useReadContract, useWriteContract } from '@wagmi/vue';
import { formatEther, parseEther } from 'viem';
import { staking, stakingAddress } from '@/constants/precompile';
import { $t } from '@/locales';
import { statusStr } from '@/utils/common';

const { writeContract } = useWriteContract();

const status = 0;
const pageRequest = {
  key: '0x00',
  offset: 0,
  limit: 100,
  countTotal: true,
  reverse: false
};

const {
  data: validatorsRes,
  refetch,
  isLoading: loading
} = useReadContract({
  abi: staking,
  address: stakingAddress,
  functionName: 'validators',
  args: [status, pageRequest]
});

const validators = computed<Chain.Validator[]>(() => {
  if (validatorsRes.value) {
    const [list, _] = validatorsRes.value as [Chain.Validator[], Chain.PageResponse];
    return list;
  }
  return [];
});

const columns: DataTableColumns<Chain.Validator> = [
  {
    key: 'name',
    title: 'Name',
    align: 'center',
    width: 64,
    render: (row: Chain.Validator) => {
      return row.description.moniker;
    }
  },
  {
    key: 'operatorAddress',
    title: 'Address',
    align: 'center',
    minWidth: 100
  },
  {
    key: 'tokens',
    title: 'Tokens',
    align: 'center',
    render: (row: Chain.Validator) => {
      return formatEther(row.tokens);
    }
  },
  {
    key: 'jailed',
    title: 'Jailed',
    align: 'center',
    render: (row: Chain.Validator) => {
      return row.jailed ? 'Yes' : 'No';
    }
  },
  {
    key: 'status',
    title: 'Status',
    align: 'center',
    render: (row: Chain.Validator) => {
      return statusStr(row.status);
    }
  },
  {
    key: 'operate',
    title: $t('common.operate'),
    align: 'center',
    width: 130,
    render: row => (
      <div class="flex-center gap-8px">
        <NPopconfirm
          onPositiveClick={() => {
            writeContract({
              abi: staking,
              address: stakingAddress,
              functionName: 'delegate',
              args: [row.operatorAddress, parseEther('1')]
            });
          }}
        >
          {{
            default: () => 'delegate 1',
            trigger: () => (
              <NButton ghost size="small">
                delegate
              </NButton>
            )
          }}
        </NPopconfirm>

        <NPopconfirm
          onPositiveClick={() => {
            writeContract({
              abi: staking,
              address: stakingAddress,
              functionName: 'undelegate',
              args: [row.operatorAddress, parseEther('1')]
            });
          }}
        >
          {{
            default: () => 'undelegate 1',
            trigger: () => (
              <NButton type="warning" ghost size="small">
                undelegate
              </NButton>
            )
          }}
        </NPopconfirm>
      </div>
    )
  }
];
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <NCard title="Validator List" :bordered="false" size="small" class="sm:flex-1-hidden card-wrapper">
      <template #header-extra>
        <TableHeaderOperation :disabled-delete="true" :loading="loading" @refresh="refetch" />
      </template>
      <NDataTable
        :columns="columns"
        :data="validators"
        size="small"
        :flex-height="false"
        :scroll-x="962"
        :loading="loading"
        remote
        :row-key="row => row.id"
        class="sm:h-full"
      />
    </NCard>
  </div>
</template>

<style scoped></style>
