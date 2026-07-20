<script setup lang="ts">
import type { PersonalProject } from '../data/projects';

defineProps<{
	project: PersonalProject;
}>();
</script>

<template>
	<article
		class="project-card group flex h-full flex-col rounded-3xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-6 shadow-[0_16px_36px_rgba(21,61,59,0.08)] transition duration-200 hover:-translate-y-1 hover:border-[#9bc7bf] hover:shadow-[0_20px_40px_rgba(21,61,59,0.14)] sm:p-7"
	>
		<div class="mb-8 flex items-start justify-between gap-4">
			<h3 class="text-lg font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
				{{ project.name }}
			</h3>
			<span
				v-if="project.featured"
				class="shrink-0 rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-medium text-[var(--color-primary-dark)]"
			>
				精选
			</span>
		</div>

		<p class="min-h-12 text-sm leading-7 text-[var(--color-muted)]">
			{{ project.description }}
		</p>

		<ul class="mt-6 flex flex-wrap gap-2" aria-label="项目技术标签">
			<li
				v-for="tag in project.tags"
				:key="tag"
				class="rounded-full border border-[#dce7e5] bg-[#f5f9f8] px-3 py-1 text-xs text-[#426561]"
			>
				{{ tag }}
			</li>
		</ul>

		<div class="mt-8 flex flex-wrap gap-x-5 gap-y-3 pt-1">
			<a
				v-for="link in project.links"
				:key="link.href"
				:href="link.href"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-link)] transition hover:text-[var(--color-link-hover)] hover:no-underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
			>
				{{ link.label }}
				<span aria-hidden="true">↗</span>
			</a>
		</div>
	</article>
</template>
