<script setup lang="ts">
import { computed } from 'vue';
import { useBalance, useReadContract } from '@wagmi/vue';
import { formatEther } from 'viem';
import { createReusableTemplate } from '@vueuse/core';
import type { Ref } from 'vue';
import {
  bank,
  bankAddress,
  bondModuleAddress,
  distribution,
  distributionAddress,
  distributionMoudleAddress
} from '@/constants/precompile';

defineOptions({
  name: 'CardData'
});

interface CardData {
  key: string;
  title: string;
  value: number;
  unit: string;
  suffix?: string;
  color: {
    start: string;
    end: string;
  };
  icon: string;
}

const balances = useReadContract({
  abi: bank,
  address: bankAddress,
  functionName: 'totalSupply',
  args: []
}).data as Ref<Chain.Coin[]>;

const { data: bondBalance } = useBalance({ address: bondModuleAddress });
const { data: distributionBalance } = useBalance({ address: distributionMoudleAddress });
const communityPoolBalance = useReadContract({
  abi: distribution,
  address: distributionAddress,
  functionName: 'communityPool',
  args: []
}).data as Ref<Chain.DecCoin[]>;

const cardData = computed<CardData[]>(() => [
  {
    key: 'totalSupply',
    title: 'Total Supply',
    value: Number.parseFloat(formatEther((balances.value && balances.value[0].amount) || BigInt(0))),
    unit: '',
    color: {
      start: '#865ec0',
      end: '#5144b4'
    },
    decimals: 2,
    icon: 'ant-design:money-collect-outlined'
  },
  {
    key: 'bonded',
    title: 'Bonded',
    value: Number.parseFloat(formatEther(bondBalance.value?.value || BigInt(0))),
    unit: '',
    color: {
      start: '#ec4786',
      end: '#b955a4'
    },
    decimals: 2,
    icon: 'ant-design:bar-chart-outlined'
  },
  {
    key: 'distribution',
    title: 'Distribution',
    value: Number.parseFloat(formatEther(distributionBalance.value?.value || BigInt(0))),
    unit: '',
    color: {
      start: '#56cdf3',
      end: '#719de3'
    },
    icon: 'carbon:document-download'
  },
  {
    key: 'communityPool',
    title: 'Community Pool',
    value: Number.parseFloat(
      formatEther(
        ((communityPoolBalance.value && communityPoolBalance.value[0].amount) || BigInt(0)) / BigInt(10 ** 18)
      )
    ),
    unit: '',
    color: {
      start: '#fcbc25',
      end: '#f68057'
    },
    icon: 'ant-design:trademark-circle-outlined'
  }
]);

interface GradientBgProps {
  gradientColor: string;
}

const [DefineGradientBg, GradientBg] = createReusableTemplate<GradientBgProps>();

function getGradientColor(color: CardData['color']) {
  return `linear-gradient(to bottom right, ${color.start}, ${color.end})`;
}
</script>

<template>
  <NCard :bordered="false" size="small" class="card-wrapper">
    <!-- define component start: GradientBg -->
    <DefineGradientBg v-slot="{ $slots, gradientColor }">
      <div class="rd-8px px-16px pb-4px pt-8px text-white" :style="{ backgroundImage: gradientColor }">
        <component :is="$slots.default" />
      </div>
    </DefineGradientBg>
    <!-- define component end: GradientBg -->

    <NGrid cols="s:1 m:2 l:4" responsive="screen" :x-gap="16" :y-gap="16">
      <NGi v-for="item in cardData" :key="item.key">
        <GradientBg :gradient-color="getGradientColor(item.color)" class="flex-1">
          <h3 class="text-16px">{{ item.title }}</h3>
          <div class="flex justify-between pt-12px">
            <SvgIcon :icon="item.icon" class="text-32px" />
            <CountTo
              :prefix="item.unit"
              :start-value="1"
              :end-value="item.value"
              :decimals="2"
              :suffix="item.suffix"
              class="text-30px text-white dark:text-dark"
            />
          </div>
        </GradientBg>
      </NGi>
    </NGrid>
  </NCard>
</template>

<style scoped></style>
