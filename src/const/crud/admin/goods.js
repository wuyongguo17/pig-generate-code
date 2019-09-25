/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */

export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  editBtn: false,
  delBtn: false,
  addBtn: false,
  column: [
	  {
      label: '',
      prop: 'id'
    },
	  {
      label: '商品名称',
      prop: 'goodsName'
    },
	  {
      label: '商品logo',
      prop: 'logo'
    },
	  {
      label: '商品缩略图logo',
      prop: 'smLogo'
    },
	  {
      label: '商品价格',
      prop: 'price'
    },
	  {
      label: '商品描述',
      prop: 'goodsDesc'
    },
	  {
      label: '是否上架：1：上架，0：下架',
      prop: 'isOnSale'
    },
	  {
      label: '是否已经删除，1：已经删除 0：未删除',
      prop: 'isDelete'
    },
	  {
      label: '添加时间',
      prop: 'addtime'
    },
  ]
}
